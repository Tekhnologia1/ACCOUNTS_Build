const { createFirm, getFirmById, getAllFirms, firmExists, linkUserToFirm, getFirmsByUserId, updateFirm, deleteFirm, getTotalBalanceByUserId } = require('../models/firmModel');
const { getTotalBalanceByFirmId } = require('../models/paymentModel');


// Existing handler to create a firm
const createFirmHandler = async (req, res) => {
  try {
    const { firm_name, firm_email, firm_gstno, firm_address, firm_status } = req.body;
    const { user_id } = req.params;

    // if (req.user.usr_role !== 'Super Admin') {
    //   return res.status(403).send({ status: false, message: 'Only Super Admins can create firms' });
    // }

    if (!firm_name || !firm_email || !firm_gstno || !firm_address || !firm_status) {
      return res.status(400).send({ status: false, message: 'All fields are required' });
    }

    const existingFirm = await firmExists(firm_email, firm_gstno);
    if (existingFirm) {
      return res.status(400).send({ status: false, message: 'Firm with this email or GST number already exists' });
    }

    const firm_id = await createFirm(firm_name, firm_email, firm_gstno, firm_address, firm_status);
    await linkUserToFirm(user_id, firm_id, 'Super Admin');

    res.status(201).send({ status: true, data: firm_id, message: 'Firm created successfully' });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// Existing handler to get a firm by ID
const getFirmHandler = async (req, res) => {
  try {
    const { firm_id } = req.params;
    const firm = await getFirmById(firm_id);
    if (!firm) {
      return res.status(404).send({ status: false, message: 'Firm not found' });
    }

    const total_balance = await getTotalBalanceByFirmId(firm_id);
    firm.total_balance = total_balance;
    res.status(200).send({ status: true, data: firm });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// Modified handler to get all firms
const getAllFirmsHandler = async (req, res) => {
  try {
    const { user_id } = req.query;
    let firms;

    if (user_id) {
      firms = await getFirmsByUserId(user_id);
    } else {
      firms = await getAllFirms();
    }

    res.status(200).send({ status: true, data: firms });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// New handler to get firms by user ID
const getFirmsByUserHandler = async (req, res) => {
  try {
    const { user_id } = req.params;
    const firms = await getFirmsByUserId(user_id);
    if (!firms || firms.length === 0) {
      return res.status(404).send({ status: false, message: 'No firms found for this user' });
    }

    // Fetch total balance for each firm and add it to the firm data
    for (const firm of firms) {
      const total_balance = await getTotalBalanceByFirmId(firm.firm_id);
      firm.total_balance = total_balance;
    }

    res.status(200).send({ status: true, data: firms });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};


const updateFirmHandler = async (req, res) => {
  try {
    const { firm_id } = req.params;
    const { firm_name, firm_email, firm_gstno, firm_address, firm_status } = req.body;

    // if (req.user.usr_role !== 'Super Admin') {
    //   return res.status(403).send({ status: false, message: 'Only Super Admins can update firms' });
    // }

    const existingFirm = await getFirmById(firm_id);
    if (!existingFirm) {
      return res.status(404).send({ status: false, message: 'Firm not found' });
    }

    await updateFirm(firm_id, firm_name, firm_email, firm_gstno, firm_address, firm_status);
    res.status(200).send({ status: true, message: 'Firm updated successfully' });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// Handler to delete a firm
const deleteFirmHandler = async (req, res) => {
  try {
    const { firm_id } = req.params;

    // if (req.user.usr_role !== 'Super Admin') {
    //   return res.status(403).send({ status: false, message: 'Only Super Admins can delete firms' });
    // }

    const existingFirm = await getFirmById(firm_id);
    if (!existingFirm) {
      return res.status(404).send({ status: false, message: 'Firm not found' });
    }

    await deleteFirm(firm_id);
    res.status(200).send({ status: true, message: 'Firm deleted successfully' });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const getTotalBalanceByUserHandler = async (req, res) => {
  try {
    const { user_id } = req.params;
    const total_balance = await getTotalBalanceByUserId(user_id);

    if (total_balance === null) {
      return res.status(404).send({ status: false, message: 'No balance found for this user' });
    }

    res.status(200).send({ status: true, data: total_balance, message: 'Total balance fetched successfully' });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { createFirmHandler, getFirmHandler, getAllFirmsHandler, getFirmsByUserHandler, updateFirmHandler, deleteFirmHandler, getTotalBalanceByUserHandler };
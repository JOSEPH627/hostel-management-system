const settings = {
  hostel: {
    name: "HM Hostel",
    address: "Dar es Salaam, Tanzania",
    phone: "+255 700 000 000",
    email: "info@hmhostel.com",
  },

  system: {
    currency: "TZS",
    timezone: "Africa/Dar_es_Salaam",
    dateFormat: "DD/MM/YYYY",
  },

  notifications: {
    paymentAlerts: true,
    maintenanceAlerts: true,
    allocationAlerts: true,
    studentRegistrationAlerts: true,
  },

  security: {
    sessionTimeout: "30 minutes",
    twoFactorAuthentication: false,
  },
};

export default settings;
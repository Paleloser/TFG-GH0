module.exports.auth = (user) => user.name == 'admin' && user.hmac == 'E10ADC3949BA59ABBE56E057F20F883D';
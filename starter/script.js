var startOfBusiness = moment('09', 'HH');

var hourRow = $('#timeRow');

while (startOfBusiness.hour()<18) {
    startOfBusiness.add(1, 'hours');
    console.log (startOfBusiness.format('ddd Do hh:MMa'));
}

hourRow.innerText = startOfBusiness.format('ddd Do hh:MMa');
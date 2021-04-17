(function () {
  'use strict'

  const payslipSelect = document.querySelector('select[name="assId"]')
  if (!payslipSelect) { return }

  const options = Array.from(payslipSelect.querySelectorAll('option'))
  const sortedOptions = options
    .map(option => {
      const [_, day, month, year] = /^(\d+)-([^-]+)-(\d+) /.exec(option.text)
      return { option, date: Date.parse(`${day} ${month} ${year}`) }
    })
    .sort((left, right) => left.date - right.date)
    .map(x => x.option)

  sortedOptions.forEach(option => {
    payslipSelect.removeChild(option)
    payslipSelect.add(option)
  })
})()


import React from 'react'
import Stepper from '../../components/Stepper/Stepper'
import Main from '../../components/Main/Main'
import Header from '../../components/Header/Header'
import DayPicker from 'react-day-picker'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addToSelectedDays, addToSelectedTimes } from '../../actions'

const WEEKDAY_LONG = [
  'شنبه',
  'یکشنبه',
  'دوشنبه',
  'سه شنبه',
  'چهارشنبه',
  'پنج شنبه',
  'جمعه'
]
const WEEKDAYS_SHORT = ['ش', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'ج']
const MONTHS = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
]
const FIRST_DAYS_OF_WEEK = 1
const LABELS = {
  nextMonth: 'ماه بعد',
  previousMonth: 'ماه قبل'
}

class Step2Form extends React.Component {

  constructor(props) {
    super(props)
    this.addToSelectedDays = this.addToSelectedDays.bind(this)
    this.addToSelectedTimes = this.addToSelectedTimes.bind(this)
  }

  addToSelectedDays(day) {
    this.props.addToSelectedDays(day)
  }

  addToSelectedTimes(time) {
    this.props.addToSelectedDays(time)
  }

  render() {
    const { selectedDays, selectedTimes, title } = this.props
    console.log(title)
    return (
      <div className="row">
        <Header backButton={true} to="/create" />
        <Main>
          <form action="#" className="form">
            <div className="form-bg">
              <Stepper
                currentStep={2}
                totalSteps={3}
              />
              <h2 className="form-title">زمان و ساعت پیشنهادی رویداد چیه؟</h2>
              <div className="form-inputs">
                <div className="row">
                  <div className="col-6">
                    <DayPicker
                      locale='fa'
                      months={MONTHS}
                      weekdaysLong={WEEKDAY_LONG}
                      weekdaysShort={WEEKDAYS_SHORT}
                      firstDayOfWeek={FIRST_DAYS_OF_WEEK}
                      labels={LABELS}
                      selectedDays={selectedDays}
                      onDayClick={this.addToSelectedDays}
                    />
                  </div>
                </div>
              </div>
            </div>
            <footer className="form-footer clearfix">
              <button type="submit" className="btn btn-green btn-large">مرحله بعد</button>
            </footer>
          </form>
        </Main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { evt } = state.eventReducer
  const { selectedDays, selectedTimes, title } = evt
  return {
    selectedDays,
    selectedTimes,
    title
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addToSelectedDays,
    addToSelectedTimes
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2Form)

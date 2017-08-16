import React from 'react'
import Stepper from '../../components/Stepper/Stepper'
import Main from '../../components/Main/Main'
import Header from '../../components/Header/Header'
// import SweetAlert from 'sweetalert-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { saveStep1, getLocationSuggestion } from '../../actions'
import { getParameterByName } from '../../utils/query-params'

class Step1Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      title: '',
      location: '',
      note: ''
    }
  }

  componentDidMount() {
    // Saving query params to store
    const params = {
      title: getParameterByName('title', window.location) || this.props.title || '',
      location: getParameterByName('location', window.location) || this.props.location || '',
      note: getParameterByName('note', window.location) || this.props.note || ''
    }

    const { title, location, note } = params

    this.setState({
      title,
      location,
      note
    })
  }

  // Saves input values to store
  saveEntity(e, type) {
    switch(type) {
      case 'title':
        return this.setState({
          title: e.target.value
        })
      case 'location':
        return this.setState({
          location: e.target.value
        })
      case 'note':
        return this.setState({
          note: e.target.value
        })
      default:
        return console.warn('invalid type on saveEntity, not saving...')
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.saveStep1(this.state.title, this.state.location, this.state.note)
    this.props.router.push('/create/date')
  }

  render() {
    const { title, location, note } = this.state
    return (
      <div className="row">
        <Header />
        <Main>
          <form action="#" className="form" onSubmit={this.handleSubmit}>
            <div className="form-bg">
              <Stepper
                currentStep={1}
                totalSteps={3}
              />
              <h2 className="form-title">مناسبتتون چیه؟</h2>
              <div className="form-inputs">
                <div className="input-group">

                  <input value={title} onChange={(e) => this.saveEntity(e, 'title')} className={`form-input ${title && 'input-has-value'}`} type="text" id="evt-title" />

                  <label htmlFor="evt-title" className="form-label">عنوان رویداد</label>
                </div>
                <div className="input-group">

                  <input value={location} onChange={(e) => this.saveEntity(e, 'location')} className={`form-input ${location && 'input-has-value'}`} type="text" id="evt-location" />

                  <label htmlFor="evt-location" className="form-label">مکان رویداد <small>(اختیاری)</small></label>
                </div>
                <div className="input-group">

                  <textarea value={note} onChange={(e) => this.saveEntity(e, 'note')} className={`form-input ${note && 'input-has-value'}`} type="text" id="evt-note" />

                  <label htmlFor="evt-note" className="form-label">توضیحات <small>(اختیاری)</small></label>
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
  const { title, location, note } = evt
  console.log(state.eventReducer)
  return {
    title,
    location,
    note
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveStep1
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1Form)

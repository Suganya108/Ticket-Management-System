import React from 'react';

class AddAgent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      agentlist: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:4040/agents')
      .then(res => res.json())
      .then(data => {
        this.setState({ agentlist: data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    console.log(this.state.agentlist[0])

    return (
      <div>
        <h2>Add Agent</h2>
        <table style={{ textAlign: 'left' }}>
          <tr>
            <td>Agent Id</td>
            <td>
              <input type='text' style={{ float: 'left' }} />
            </td>
          </tr>
          <tr>
            <td>First name</td>
            <td>
              <input type='text' style={{ float: 'left' }} />
            </td>
          </tr>
          <tr>
            <td>Last name</td>
            <td>
              <input type='text' style={{ float: 'left' }} />
            </td>
          </tr>
          <tr>
            <td>Mobile Number</td>
            <td>
              <input type='text' style={{ float: 'left' }} />
            </td>
          </tr>
          <tr>
            <td>Email Id</td>
            <td>
              <input type='text' style={{ float: 'left' }} />
            </td>
          </tr>
        </table>
        <button onClick=''>Add Agent</button>
      </div>
    )
  }
}

export default AddAgent

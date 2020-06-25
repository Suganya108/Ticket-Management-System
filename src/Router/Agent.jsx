import React from 'react';

class Agent extends React.Component {
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
    return (
      <div>
        <table style={{ width: '100%', textAlign: 'left' }}>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>

          {this.state.agentlist.map((agent, index) => (
            <tr key={index}>
              <td>
                {agent.name.first} {agent.name.last}
              </td>
              <td>{agent.mobile}</td>
              <td>{agent.email}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Agent

import React from 'react';

class AddContact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contactlist: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:4040/contacts')
      .then(res => res.json())
      .then(data => {
        this.setState({ contactlist: data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addContact = () => {
    console.log('onclick working')
    return (
      <div>
        <table style={{ width: '100%', textAlign: 'left' }}>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>
              First:
              <input type='text' key='' style={{ float: 'left' }} />
              <td>
                Last:
                <input type='text' key='' style={{ float: 'left' }} />
              </td>
            </td>
            <td>
              <input type='text' key='' style={{ float: 'left' }} />
            </td>
            <td>
              <input type='text' key='' style={{ float: 'left' }} />
            </td>
          </tr>
        </table>
      </div>
    )
  }

  render () {
    console.log(this.state.contactlist[0])

    return (
      <div>
        <h2>Add Contact</h2>
        <table style={{ textAlign: 'left' }}>
          <tr>
            <td>Contact Id</td>
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
        <button onClick=''>Add Contact</button>
      </div>
    )
  }
}

export default AddContact

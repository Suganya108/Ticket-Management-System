import React from 'react';

class Contact extends React.Component {
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

  render () {
    return (
      <div>
        <table style={{ width: "100%", textAlign: "left" }}>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
          {this.state.contactlist.map((contact, index) => (
            <tr key={index}>
              <td> {contact.name.first} {contact.name.last} </td>
              <td>{contact.mobile}</td>
              <td>{contact.email}</td> 
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Contact

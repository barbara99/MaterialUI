import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'

import School from './Schools'

const SPACE_ID = '177fckweumd1'
const ACCESS_TOKEN = '247300273b2ca0d38cf419059c351b68588ac68a2f5aa2df8a270e190af586ef'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class SchoolList extends Component {
    state = {
        schools: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getSchools()
    }

    getSchools = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({schools: response.items})
            console.log(this.state.schools)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getSchools()
    }

    render() {
        return (
            <div>
                { this.state.schools ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for School"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.schools.map(currentSchool => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <School school={currentSchool} />
                                </Grid>
                            ))}
                        </Grid>
                        </div>
                ) : "No school found" }
            </div>
        )
    }
}

export default SchoolList;
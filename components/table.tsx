import React from 'react';
import ExportTableToExcel from './ExportToExel';

function App() {
  return (
    <div>
      <h1>My Data Table</h1>
      <table id="big-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Occupation</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Emma</td>
            <td>Johnson</td>
            <td>28</td>
            <td>Software Engineer</td>
            <td>New York</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Liam</td>
            <td>Smith</td>
            <td>35</td>
            <td>Graphic Designer</td>
            <td>London</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Olivia</td>
            <td>Williams</td>
            <td>42</td>
            <td>Project Manager</td>
            <td>Toronto</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Noah</td>
            <td>Brown</td>
            <td>30</td>
            <td>Data Analyst</td>
            <td>Sydney</td>
            <td>Australia</td>
          </tr>
          <tr>
            <td>Ava</td>
            <td>Jones</td>
            <td>27</td>
            <td>Marketing Specialist</td>
            <td>San Francisco</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>William</td>
            <td>Garcia</td>
            <td>38</td>
            <td>Architect</td>
            <td>Madrid</td>
            <td>Spain</td>
          </tr>
          <tr>
            <td>Sophia</td>
            <td>Miller</td>
            <td>31</td>
            <td>Doctor</td>
            <td>Berlin</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>James</td>
            <td>Davis</td>
            <td>45</td>
            <td>Lawyer</td>
            <td>Paris</td>
            <td>France</td>
          </tr>
          <tr>
            <td>Isabella</td>
            <td>Martinez</td>
            <td>29</td>
            <td>Teacher</td>
            <td>Rome</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>Benjamin</td>
            <td>Rodriguez</td>
            <td>33</td>
            <td>Chef</td>
            <td>Mexico City</td>
            <td>Mexico</td>
          </tr>
        </tbody>
      </table>
      <ExportTableToExcel fileName="MyDataTable" tableId="big-table" />
    </div>
  );
}

export default App;

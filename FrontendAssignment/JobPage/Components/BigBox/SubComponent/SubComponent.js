import React from 'react';
import './SubComponent.css';

function SubComponent() {
  return (
 <div className='Sub_Container'>
<h4 className='heading'>About this role</h4>
<p className='Para-text'>Short overview about job and the way that the candidate would fit into the company Can also include extra instructions for the application process if any exist.</p> 
<h4>Responsibilities</h4>
<ul>
    <li><p>specific day to day taks</p></li>
    <li><p>deliverables</p></li>
    <li><p>work environment requirements</p></li>
    <li><p>role within the current team</p></li>
    <li><p>etc.</p></li>
</ul>
<h4>Skills</h4>
<ul>
   <li><p>software skills</p></li>
   <li><p>technical skills</p></li>
   <li><p>soft skills</p></li>
   <li><p>other</p></li> 
</ul>
<h4>Qualifications</h4>
<h6>Required</h6>
<ul>
    <li><p>education</p></li>
    <li><p>licenses and certifications</p></li>
    <li><p>experience needed</p></li>
</ul>
<h6>Bonus</h6>
<ul>
    <li><p>education</p></li>
    <li><p>licenses and certifications</p></li>
    <li><p>experience needed</p></li>
</ul>
<h4>Rate</h4>
<ul>
    <li><p>if available</p></li>
</ul>
<h4>Time Estimate</h4>
<ul>
    <li><p>if applicable</p></li>
</ul>
<h4>Work Autoriation</h4>
<ul>
    <li><p>tbd</p></li>
</ul>
<h4>About Company</h4>
<p>Description of company with any uniform info or disclaimers - equal hiring opportunity, etc.</p>
</div>
  )
}

export default SubComponent

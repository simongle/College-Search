import React from 'react';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
	minimumFractionDigits: 2
})

const blurb = (props) => {
const { tuition = 0 } = props;
return <div> {tuition === 0 ? `This institution did not
report financial data in 2016.` : (
<React.Fragment>
<p>This institution spends {formatter.format(props.tuitionRatio)} on instruction for every dollar it collects in tuition.</p>
<p>This is a {props.schoolType} and the tuition collected per full-time student
or equivalent is {formatter.format(props.tuition)}.</p>
</React.Fragment>
)
}
<h3>How does this school stack up?</h3>
<p>The average public institution spends $1.42 on instruction for every dollar
collected in tuition.</p>
<p>The average private nonprofit institution spends $0.84 on instruction for
every dollar collected in tuition.</p>
<p>The average private for-profit institution spends $0.29 on instruction for
every dollar collected in tuition.</p>
</div>
}

export default blurb;

//App.js 
import React, { useState } from 'react'; 
import './App.css';



function BmiCalculator() { 
	const [heightValue, setHeightValue] = useState(''); 
	const [weightValue, setWeightValue] = useState(''); 
	const [bmiValue, setBmiValue] = useState(''); 
	const [bmiMessage, setBmiMessage] = useState(''); 

	const calculateBmi = () => { 
		if (heightValue && weightValue) { 
			const heightInMeters = heightValue / 100; 
			const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
			setBmiValue(bmi); 

			let message = ''; 
			if (bmi < 18.5) { 
				message = 'You are Underweight'; 
			} else if (bmi >= 18.5 && bmi < 25) { 
				message = 'You are Normal weight'; 
			} else if (bmi >= 25 && bmi < 30) { 
				message = 'You are Overweight'; 
			} else { 
				message = 'You are Obese'; 
			} 
			setBmiMessage(message); 
		} else { 
			setBmiValue(''); 
			setBmiMessage(''); 
		} 
	}; 


  

	return ( 
		
		<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
		<div style={{backgroundColor:'pink',width:'500px'}} className='p-3 rounded'>
	
		<div className="container"> 
		
			<h1> BMI Calculator</h1> 
			<div className="input-container">
				<label htmlFor="height">Enter Your Height (cm):</label> 
				<input 
					type="number"
					id="height"
					value={heightValue} 
					onChange={(e) => setHeightValue(e.target.value)} 
				/> 
			</div> 
			<div className="input-container"> 
				<label htmlFor="weight" >Enter Your Weight (kg):</label> 
				<input 
					type="number"
					id="weight"
					value={weightValue} 
					onChange={(e) => setWeightValue(e.target.value)} 
				/> 
			</div> 
			<button className="mt-3 bg-primary w-100 " onClick={calculateBmi}> 
				Click to Calculate BMI 
			</button> 
			{bmiValue && bmiMessage && ( 
				<div className="result"class="text-danger bg-black mt-3"> 
					<p> 
						Your BMI: <span className="bmi-value">{bmiValue}</span> 
					</p> 
					<p> 
						Result: <span className="bmi-message">{bmiMessage}</span> 
					</p> 

</div>

				

        
			)} 

<div className='scale'>

<h6 class="color">Underweight: BMI less than 18.5</h6>

<h6 class="color">Normal Weight: BMI between 18.5 and 25</h6>
<h6 class="color">Overweight: BMI between 25 and 29.9</h6>
<h6 class="color">Obese: BMI greater than 30</h6>
</div>
    
    </div> 

</div>
</div>








	); 
} 

export default BmiCalculator;

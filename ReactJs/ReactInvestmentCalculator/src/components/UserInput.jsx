export default function UserInput({onChange, userInput}){
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
                    <input type="number" id="initialInvestment" required 
                        onChange={(e) => onChange({...userInput, initialInvestment: +e.target.value})}/>
                </p>
                
                <p>
                    <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
                    <input type="number"id="annualInvestment" required
                       onChange={(e) => onChange({...userInput, annualInvestment: +e.target.value})}/>
                </p>

                <p>
                    <label htmlFor="expectedReturn">EXPECTED RETURN</label>
                    <input type="number" id="expectedReturn" required
                        onChange={(e) => onChange({...userInput, expectedReturn: +e.target.value})}/>
                </p>

                <p><br/>
                    <label htmlFor="duration">DURATION</label>
                    <input type="number" id="duration" required
                        onChange={(e) => onChange({...userInput, duration: +e.target.value})}/>
                </p>
            </div>
        </section>
    );
}
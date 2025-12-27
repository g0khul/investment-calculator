export default function UserInput({ userInput, onSubmit }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) => { onSubmit("initialInvestment", event.target.value) }} />
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => { onSubmit("annualInvestment", event.target.value) }} />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => { onSubmit("expectedReturn", event.target.value) }} />
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => { onSubmit("duration", event.target.value) }} />
                </div>
            </div>
        </section>
    )
}

import '../css/EditSentence.css';

const EditSentence = () => {
    return (
        <div className="overlay">
            <form className="new-sentence" action="" method="post">
                <div className="new-sentence-inputs">
                    <div className="formItem">
                        <label htmlFor="GET-sentence">Original sentence:</label>
                        <input id="GET-sentence" type="text" name="sentence" required/>
                    </div>
                    <div className="formItem">
                        <label htmlFor="GET-sentence">Keyword:</label>
                        <input id="GET-keyword" type="text" name="sentence" required/>
                    </div>
                    <div className="formItem">
                        <label htmlFor="GET-start">Start of the new sentence:</label>
                        <input id="GET-start" type="text" name="sentence" required/>
                    </div>
                    <div className="formItem">
                        <label htmlFor="GET-answer">Correct answer:</label>
                        <input id="GET-answer" type="text" name="sentence" required/>
                    </div>
                    <div className="formItem">
                        <label htmlFor="GET-end">End of the new sentence:</label>
                        <input id="GET-end" type="text" name="sentence" required/>
                    </div>
                </div>
                <div className="new-sentence-buttons">
                    <input type="submit" value="Cancel"/>
                    <input type="submit" value="Save"/>
                </div>
            </form>
        </div>
    )
}

export default EditSentence;

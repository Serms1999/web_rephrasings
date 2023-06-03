import {IManageDataProps} from "../interfaces/ManageDataProps";
import "../css/ManageData.css"
import {faFileImport, faFileExport, faXmark, faEraser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {eraseApiDatabase, getSentencesFromApi, importSentencesIntoDatabaseApi} from "../api/api";
import {ISentence} from "../interfaces/ISentence";

const handleExport = async () => {
    const sentences = await getSentencesFromApi();
    const data = JSON.stringify(sentences, null, 2);
    const link = document.createElement("a");
    link.download = "data.json";
    const blob = new Blob([data], {type: "text/plain"});
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

const ManageData = ({ currentSentences, updateSentences, setShowPopUp }: IManageDataProps) => {

    const handleImport = async (fileList: FileList | null) => {
        if (!fileList) return;
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            if (typeof reader.result !== "string") return;
            const data = JSON.parse(reader.result);

            importSentencesIntoDatabaseApi(data)
                .then(indexes => {
                    data.forEach((sentence: ISentence, index: number) => {
                        sentence.id = indexes[index];
                    });
                    const sentencesCopy = [...currentSentences];
                    sentencesCopy.push(...data);
                    updateSentences(sentencesCopy);
                })
                .catch(e => {
                    console.error(e);
                })
        });

        reader.readAsText(fileList[0]);
        setShowPopUp(false);
    }

    const handleErase = async () => {
        if (window.confirm('Are you sure to delete all the data on the database?')) {
            const databaseErased = await eraseApiDatabase();
            if (databaseErased) {
                updateSentences([]);
            }
            setShowPopUp(false);
        }
    }

    return (
        <div className="manageDataWindow">
            <button className="closeData" onClick={() => {setShowPopUp(false);}}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>
            <p>Import or export sentences</p>
            <div className="dataButtons">
                <label className="importData" htmlFor={"importInput"}>
                    <FontAwesomeIcon icon={faFileImport}/> Import
                </label>
                <input id={"importInput"} type={"file"} accept={"application/json"}
                       onChange={async event => {
                    await handleImport(event.target.files);
                }}/>
                <button className="exportData" onClick={handleExport}>
                    <FontAwesomeIcon icon={faFileExport}/> Export
                </button>
            </div>
            <button className="eraseDatabase" onClick={handleErase}>
                <FontAwesomeIcon icon={faEraser}/> Erase database
            </button>
        </div>
    )
}

export default ManageData;

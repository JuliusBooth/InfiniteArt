import useLocalStorage from '../helpers/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';


function ApiKeyForm() {
    const KEYNAME = 'apiKey';
    const [apiKey, setApiKey] = useLocalStorage(KEYNAME, null);
    
    return (
        <div className="container mt-5">
                <div className="form-group">
                    <h3 htmlFor="apiKeyInput">OpenAI API Key</h3>
                    <input
                        type="password"
                        className="form-control"
                        id="apiKeyInput"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="Enter API key"
                    />
                </div>
        </div>
    );
}

export default ApiKeyForm;

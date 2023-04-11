import './App.css';
import Card from './components/card/card'
import Button from './components/button/button'

function App() {
    return (
        <>
            <Card>
                <p>Este é um parágrafo</p>
                <Button label='Baixar CV'/>
            </Card>
        </>
    )
}

export default App;
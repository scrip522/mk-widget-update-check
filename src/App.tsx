import React from 'react';
import './App.css';
import Title from './components/Title';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
    return (
        <>
            <div className="root-container">
                <Title />
                <Container backgroundColor='#99ccff' title="アップデートが必要です" icon={["fas", "circle-info"]}>

                </Container>
            </div>
            <Footer />
        </>
    );
}

export default App;

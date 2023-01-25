import { useState } from 'react';
import '../css/AdDesigner.css'
import { Ad } from './Ad';

function AdDesigner(){
    const [flavor, pickFlavor] = useState<string>('Chocolate')
    const [theme, setTheme] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(35)

    let themeClass = "voteFor " + (!theme ? "darkTheme" : "")

    return( 
        <div className='ad'>
            <h1>Ad Designer</h1>
            <div className={themeClass}>
                <Ad flavor={flavor} theme={theme} fontSize={fontSize} />
            </div>

            <div id='support' className='support'>
                <h3>What to Support</h3>
                <div id='supButtons'>
                    <button onClick={() => pickFlavor('Chocolate')} className={'supBut ' + (flavor === 'Chocolate' ? 'active':'')} id='choc'>Chocolate</button>
                    <button onClick={() => pickFlavor('Vanilla')} className={'supBut ' + (flavor === 'Vanilla' ? 'active':'')} id='vanil'>Vanilla</button>
                    <button onClick={() => pickFlavor('Strawberry')} className={'supBut ' + (flavor === 'Strawberry' ? 'active':'')} id='straw'>Strawberry</button>
                </div>
            </div>

            <div id='theme'>
                <h3 id='thTit'>Color Theme</h3>
                <div id='thSel'>
                    <button onClick={() => setTheme(true)} id='lightBut' className={'thBut ' + (theme ? 'active' : '')}>Light</button>
                    <button onClick={() => setTheme(false)} id='darkBut' className={'thBut ' + (!theme ? 'active' : '')}>Dark</button>
                </div>
            </div>

            <div id='fontSel'>
                <h3>Font Size</h3>
                <div id='fontSelBut'>
                    <button onClick={() => setFontSize(fontSize - 1)} className='fontBut' id='down'>Down</button>
                    <input className='fontInput' type='number' value={fontSize}></input>
                    <button onClick={() => setFontSize(fontSize + 1)} className='fontBut' id='up'>Up</button>
                </div>
            </div>
        </div>
    )
}

export default AdDesigner;
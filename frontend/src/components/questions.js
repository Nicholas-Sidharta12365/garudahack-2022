import React from 'react'

const questions = (props) => {

    const answer=props.answer

    var indent = []
    for(var i = 0; i < props.num; i++){
        indent.push(<div className="flex items-center ml-8 mt-2 text-lg"><input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /><label for="default-radio-2" className="ml-2 text-sm font-medium text-black" key={i}>{answer[i]}</label></div>);
    }

    if(props.presets === "multiple"){
        return(
            <>
            <div className="grid grid-cols-1 bg-white px-4 py-6 text-lg">
                <div className="font-bold ml-8">{props.question}</div>
                {indent}
            </div>
            </>
        );
    }
    else if(props.presets === "fill"){
        return(
            <>
            <div className="grid grid-cols-1 bg-white p-4 text-lg">
                <div className="font-bold ml-8">{props.question}</div>
                <div className="mt-2 ml-8">
                    <input type="text" className='w-2/4 border rounded px-4 py-1 border-black' />
                </div>
            </div>
            </>
        );
    }
    else{
        return(
            <>
            <div className="grid grid-cols-1 bg-white p-4 text-lg">
                <div className="font-bold ml-8">{props.question}</div>
                <div className="mt-2 ml-8">
                    <div class="w-1/2">
                        <input type="range" list="tickmarks" step={10} min="0" max="100" class="w-full" />
                        <datalist id="tickmarks">
                            <option value="0">0</option>
                            <option value="10">1</option>
                            <option value="20">2</option>
                            <option value="30">3</option>
                            <option value="40">4</option>
                            <option value="50">5</option>
                            <option value="60">6</option>
                            <option value="70">7</option>
                            <option value="80">8</option>
                            <option value="90">9</option>
                            <option value="100">10</option>
                        </datalist>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default questions
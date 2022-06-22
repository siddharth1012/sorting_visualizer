/**
 * swap function until sorting algorithms takes input of 2 DOM elememts 
 * with .style.height feature
 */

function swap(el1, el2)
{
    console.log('In swap()');

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

/*disable sorting buttons used in conjunction with enable 
so that we can disable during sorting and enable button after it*/

function disableSortingBtn()
{
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".qucikSort").disabled = true;
}

/*  enables sorting button used in conjunction with disable
*/ 

function enableSortingBtn()
{
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".qucikSort").disabled = false;
}

/*disable size slider used in conjunction with enable 
so that we can disable during sorting and enable button after it*/
function disableSizeSlider()
{
    document.querySelector("#arr_size").disabled = true;
}

/*enable size slider used in conjunction with disable */
function enableSizeSlider()
{
    document.querySelector("#arr_size").disabled = false;
}

/**
 * Disable newArray button used in conjuction with enable
 * so that we can disable during sorting and enable button after it
 */
function disableNewArrayBtn()
{
    document.querySelector(".newArray").disabled = true;
}

//enable newArray buttons used in conjuction with disable
function enableNewArrayBtn()
{
    document.querySelector(".newArray").disabled = false;
}

/**
 * Used in async function so that we can have animation of sorting.
 * input time in ms (1000 = 1s)
 */

function waitforme(milisec)
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('') }, milisec);
    })
}

//Selecting size slider from DOM
let arraySize = document.querySelector('#arr_size');

//event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log.apply(arraySize.value, typeof(arraySize));
    createNewArray(parseInt(arraySize.value));
});

//default input for waitforme function in ms

let delay = 260;

//selecting speed slider from DOM

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

//creating array to store randomly genereated numbers
let array = [];

//call to display bars right when you visit the site
createNewArray();

function createNewArray(noOfBars = 60)
{
    //calling helper function to delete old bars from DOM
    deleteChild();

    //creating an array of random numbers
    array=[];
    for(let i = 0; i < noOfBars; i++)
    {
        array.push(Math.floor(Math.random()*250) + 1);
    }
    console.log(array);

    //select the div #bars element
    const bars = document.querySelector("#bars");

    //create multiple elements  div using loop and adding class 'bar col'

    for (let i = 0; i < noOfBars; i++)
    {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

/**
 * Helper function to  delete all the previous bars so that new can be added
 */

function deleteChild()
{
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

//Selecting newarray button from DOM and adding eventListner
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("from newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});


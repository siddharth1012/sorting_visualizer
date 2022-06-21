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

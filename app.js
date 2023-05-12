var dispval = document.getElementById("val1");
var getscreen = document.getElementById("screendisp");
function displayValue(number)
{
    if(dispval.value=='0')
    {
        val1.value=number;
    }
    else
    {
        val1.value+=number;
    }
}
function solve()
{
    temp = dispval.value;
    getscreen.value = temp + "=";
    dispval.value = eval(temp); 
}
function clearAll()
{
    getscreen.value = '';
    dispval.value = '0';
}
function deleteAll()
{
    if(dispval.value.length > 1)
    {
        dispval.value = dispval.value.slice(0, -1);
    }
    else
    {
        dispval.value = dispval.value.slice(0, -1);
        dispval.value = '0';
    }
}
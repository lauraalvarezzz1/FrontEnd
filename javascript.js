/**
 * Created by lauraalvarez on 11/02/17.
 */
function cambiar(esto)
{
    vista=document.getElementById(esto).style.display;
    if (vista=='none')
        vista='block';
    else
        vista='none';

    document.getElementById(esto).style.display = vista;
}
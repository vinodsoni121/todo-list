
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <div>
                <input type="checkbox">
                <span id="taskname">${document.querySelector('#newtask input').value}</span>
            </div>
            
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        var count1 = document.getElementById('count');
        for (var i = 0; i < current_tasks.length; i++) {
            count1.innerHTML = `Tasks ${i + 1}`;
            current_tasks[i].onclick = function () {
                count1.innerHTML = `Tasks ${i--}`;
                this.parentNode.remove();
            }
        }

    }
}
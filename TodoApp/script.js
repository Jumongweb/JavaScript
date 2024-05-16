const html = `
<div class="task">
<p class="task-text">
    <input type="checkbox">
    ${addTaskInput.value}    
</p>
<button class="delete">
    Delete
</button>
</div>
`;

const taskContainer = document.querySelector('.taskContainer');
const addTaskInput = document.querySelector(".addTaskInput");

const addTaskBtn = document.querySelector(".addTaskBtn").onclick;



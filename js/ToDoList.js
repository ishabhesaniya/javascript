window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list = document.querySelector("#tasks");

    // Load tasks from localStorage on page load
    loadTasks();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            return;
        }

        const task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);

        const task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);

        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);

        const task_actions_div = document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);

        const task_edit_botton = document.createElement("button");
        task_edit_botton.classList.add("Edit");
        task_edit_botton.innerHTML = "Edit";

        const task_delete_button = document.createElement("button");
        task_delete_button.classList.add("Delete");
        task_delete_button.innerHTML = "Delete";

        task_actions_div.appendChild(task_edit_botton);
        task_actions_div.appendChild(task_delete_button);

        task_edit_botton.addEventListener('click', () => {
            if (task_edit_botton.innerText.toLowerCase() === "edit") {
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit_botton.innerText = "Save";
                task_input.style.textDecoration = "none";
            } else {
                task_input.setAttribute("readonly", "readonly");
                task_edit_botton.innerText = "Edit";
            }

            // Save tasks to localStorage after editing
            saveTasks();
        });

        task_delete_button.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this task?")) {
                list.removeChild(task_div);

                // Save tasks to localStorage after deletion
                saveTasks();
            }
        });

        input.value = "";

        // Save tasks to localStorage after adding a new task
        saveTasks();
    });

    // Function to load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach((task) => {
            // Create and append tasks similar to the code inside the submit event listener
            const task_div = document.createElement("div");
            task_div.classList.add("task");
            list.appendChild(task_div);

            const task_content_div = document.createElement("div");
            task_content_div.classList.add("content");
            task_div.appendChild(task_content_div);

            const task_input = document.createElement("input");
            task_input.classList.add("text");
            task_input.type = "text";
            task_input.value = task;
            task_input.setAttribute("readonly", "readonly");
            task_content_div.appendChild(task_input);

            const task_actions_div = document.createElement("div");
            task_actions_div.classList.add("actions");
            task_div.appendChild(task_actions_div);

            const task_edit_botton = document.createElement("button");
            task_edit_botton.classList.add("Edit");
            task_edit_botton.innerHTML = "Edit";

            const task_delete_button = document.createElement("button");
            task_delete_button.classList.add("Delete");
            task_delete_button.innerHTML = "Delete";

            task_actions_div.appendChild(task_edit_botton);
            task_actions_div.appendChild(task_delete_button);

            task_edit_botton.addEventListener('click', () => {
                if (task_edit_botton.innerText.toLowerCase() === "edit") {
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                    task_edit_botton.innerText = "Save";
                    task_input.style.textDecoration = "none";
                } else {
                    task_input.setAttribute("readonly", "readonly");
                    task_edit_botton.innerText = "Edit";
                }

                // Save tasks to localStorage after editing
                saveTasks();
            });

            task_delete_button.addEventListener('click', () => {
                if (confirm("Are you sure you want to delete this task?")) {
                    list.removeChild(task_div);

                    // Save tasks to localStorage after deletion
                    saveTasks();
                }
            });
        });
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = Array.from(list.children).map((taskDiv) => {
            return taskDiv.querySelector('.text').value;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});

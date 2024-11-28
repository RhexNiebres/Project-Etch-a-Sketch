const container = document.getElementById("container");
      const gridButton = document.getElementById("gridButton");

      function clearGrid() {
        //claer existing grid
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }

      //
      function defaultGrid(size) {
        clearGrid();
        makeRows(size);
      }
      //function for making grid
      function makeRows(rowNum) {
        for (let r = 0; r < rowNum; r++) {
          let row = document.createElement("div");
          row.className = "gridRow";

          for (let c = 0; c < rowNum; c++) {
            let newCell = document.createElement("div");
            newCell.className = "cell";
            row.appendChild(newCell);

            //evenlistener that acts like a pen
            newCell.addEventListener("mouseenter", function () {
              newCell.style.backgroundColor = getRandomColor();
            });
          }

          container.appendChild(row);
        }
      }

      //random rgb color
      function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
      }
      //button for grid size
      gridButton.addEventListener("click", function () {
        const userInput = prompt("Enter grid size (1-100 for grid size):");
        const gridSize = parseInt(userInput);

        if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
          defaultGrid(gridSize);
        } else {
          alert("Please enter a valid positive number between 1 and 100.");
        }
      });

      defaultGrid(16);
# Rock-Paper-Scissors Game Assignment

## Instructions:
Create a Rock-Paper-Scissors game using HTML, CSS, and JavaScript. Users will play against the computer, and the program should declare a winner after each round. You may use your Codecademy Rock-Paper-Scissors project as a starting point, but this assignment requires HTML and CSS for the user interface.

---

## Plan:

### Objective:
Define the purpose of the program.

### Features:
- Allow the user to select Rock, Paper, or Scissors.
- Randomize the computer’s choice.
- Compare the user’s choice to the computer’s choice and declare a winner.
- Display the score for both the user and the computer.
- Provide a reset button to restart the game.

### Requirements:
- **HTML**: Game structure and UI elements.
- **CSS**: Styling for buttons, layout, and results display.
- **JavaScript**: Game logic, user interaction, and score management.

---

## Breakdown Requirements:

### Determine Necessary Variables:
- List variables and describe content.

### Decide on Basic HTML Structure:
- Define how the game structure will be implemented.

### User Interactions:
- How will the player make their selection?

### Edge Cases:
- User makes no choice (if using separate input for user choice and play game).
- User repeatedly selects the same option.

---

## Design:

### HTML Structure:
- Define the structure for the game interface.

### Visual Layout:
- Attach a wireframe.

---

## Function Design:
Write pseudocode for each of the following functions:

1. **getPlayerChoice()**: Read in player choice.
2. **getComputerChoice()**: Select random choice for computer.
3. **determineWinner()**: Logic to determine the winner.
4. **resetGame()**: Provide an option for a new game.

---

## Implement:
- Write your code.
- Don’t forget descriptive comments.

---

## Test:

### Unit Testing:
Test each function individually:
- **getPlayerChoice()**
- **getComputerChoice()**
- **determineWinner()**
- **resetGame()**

### Edge Cases:
Test proper handling of repeated inputs.

### User Input:
Test each scenario to ensure proper functionality.

#### Test Table:
| Test Number | Player Choice | Computer Choice | Winner? | Is Winner Correct? |
|-------------|---------------|-----------------|---------|--------------------|
| 1           | rock          |                 |         |                    |
| 2           | rock          |                 |         |                    |
| 3           | rock          |                 |         |                    |
| 4           | rock          |                 |         |                    |
| 5           | paper         |                 |         |                    |
| 6           | paper         |                 |         |                    |
| 7           | paper         |                 |         |                    |
| 8           | paper         |                 |         |                    |
| 9           | scissors      |                 |         |                    |
| 10          | scissors      |                 |         |                    |
| 11          | scissors      |                 |         |                    |
| 12          | scissors      |                 |         |                    |

#### Results:
- How many times did the computer choose rock? ______  
- How many times did the computer choose paper? ______  
- How many times did the computer choose scissors? ______  

---

### Test for Every Outcome:
| Test Number | Player Choice | Computer Choice | Output | Is Output Correct? |
|-------------|---------------|-----------------|--------|--------------------|
| 1           | rock          | rock            |        |                    |
| 2           | rock          | paper           |        |                    |
| 3           | rock          | scissors        |        |                    |
| 4           | paper         | rock            |        |                    |
| 5           | paper         | paper           |        |                    |
| 6           | paper         | scissors        |        |                    |
| 7           | scissors      | rock            |        |                    |
| 8           | scissors      | paper           |        |                    |
| 9           | scissors      | scissors        |        |                    |

#### Results:
- How many times did you have to play to get all possible outcomes? ______  

---

## Deploy:
Grade your project using the rubric below. Highlight the block that indicates the level you believe you have achieved for each criterion. Submit the assignment on Google Classroom.

---

## Maintain:
What would you do to expand on this project?

---

## Rubric:

### Criteria

#### Plan:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| Thoroughly defines project goals, features, and technical requirements. Clear planning and requirements documentation. | Defines most project goals and requirements, with minor gaps in planning details. | Basic goals or requirements outlined but lacks comprehensive planning. | Minimal planning or requirements identified, unclear project direction. | Did Not Attempt |

#### Design:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| Detailed wireframe, mock-up, or storyboard with logical layout, user-friendly navigation, and a clear aesthetic that reflects project goals. | Design is mostly complete and functional but lacks some detail in layout or user flow. | Design is basic or lacking in some critical user flow or layout. | Minimal design elements or poor organization. | Did Not Attempt |

#### Implement (On-Time Submission):
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| Project submitted on or before start of class on due date. | Project submitted by the end of day on due date. | Project submitted one or two days late. | Project submitted less than one week late based on due date. | Over one week late. |

#### Test:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| Comprehensive testing conducted; identified issues logged and addressed effectively. | Adequate testing conducted with minor issues unaddressed. | Minimal testing with several issues remaining. | Little to no testing conducted; major issues unresolved. | Did Not Attempt |

#### Maintain:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| Develops detailed plans for future development that could lead to a new release. | Develops plans for future development that includes significant changes/improvements to the program. | Includes some ideas for future development that change/improve the program but lacks planning. | Includes ideas for future development but they make no significant change to the program. | Did Not Attempt |

#### HTML Structure and Syntax:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| HTML is correctly structured and valid. Tags are closed properly, indentation is consistent, and semantic tags are used appropriately. | HTML is mostly correct, with minor syntax or structure issues that don’t affect the display. | Multiple syntax or structural errors; improper use of tags or inconsistent indentation. | HTML is minimally functional, with numerous errors affecting display and readability. | Did Not Attempt |

#### CSS Placement and Organization:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| CSS is primarily external, with internal or inline styles only where necessary for overriding specific styles. CSS is organized and easy to read. | CSS is mostly external, with minimal and justifiable use of internal or inline styles. | CSS is partially external, but internal or inline styles are used without clear justification. | CSS is mostly internal or inline, with poor organization. | Did Not Attempt |

#### Project Functionality: Core Features:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| All required core features are implemented and work as specified. | Most core features work as specified, with minor issues. | Core features are partially implemented, but functionality is limited or inconsistent. | Minimal core functionality is present, but major features do not work. | Did Not Attempt |

#### User Experience and Visual Design:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| Visual design is cohesive, elements are aligned, and the layout is intuitive. User interactions are smooth and logical. | Visual design is mostly cohesive, but some minor alignment or layout issues exist. | Visual design is functional but lacks consistency or has significant alignment issues. | Visual design is disorganized, with poor alignment and user flow. | Did Not Attempt |

#### Comments:
| Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|-----------------------------|--------------------------|--------------------------------|-------------------------|----------------------|
| Comments clearly explain code, are descriptive, and enhance readability. | Comments explain code, but may lack detail in some areas. | Some comments are present, but not sufficient

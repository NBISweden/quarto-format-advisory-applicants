# quarto-format-advisory-applicants

Takes the csv file of applicants and reformats them into html and docx files.

TODO:
- Fix JS filter.

## How to: Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mahesh-panchal/quarto-format-advisory-applicants)

- Upload the csv of applicants by drag-and-dropping the file into the explorer panel on the left.
- Rename the csv to `advisory_student_applications.csv`.
- Use `quarto render` in the terminal.
- Download the rendered files from the `formatted` folder in the explorer panel.

## How to: locally

<details>
<summary>Make a compute environment with Quarto and Jupyter.</summary>

Example:

```bash
# Install Quarto using brew
brew install --cask quarto

# Make an environment for the quarto executions using micromamba
micromamba env create \
    --name quarto-env \
    --channel conda-forge \
    jupyter \
    IPython

# Activate environment
micromamba activate quarto-env
```

</details>

Clone the repository locally.
After saving the applicants as a csv in the same folder, render the output.

```bash
# 1) Get Quarto code
git clone https://github.com/mahesh-panchal/quarto-format-advisory-applicants.git

# 2) Save applicants file as advisory_student_applications.csv

# 3) Reformat into html and docx
quarto render
```

The results are under the folder `formatted`.

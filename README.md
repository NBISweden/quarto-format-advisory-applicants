# quarto-format-advisory-applicants

Takes the csv file of applicants and reformats them into html and docx files.

## How to: Gitpod

Gitpod is a cloud development environment with everything installed that runs in your web browser. All you need is a Github account and a web browser.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mahesh-panchal/quarto-format-advisory-applicants)

- Upload the csv of applicants by drag-and-dropping the file into the explorer panel on the left.
- Rename the csv to `advisory_student_applications.csv`.
- Use `quarto render` in the terminal.
- Download the rendered files from the `formatted` folder in the explorer panel.

## How to: locally

<details>
<summary>Make a compute environment with Quarto and Jupyter.</summary>

- Install Quarto (see:[ Quarto - Get Started](https://quarto.org/docs/get-started/)).

- Make an environment for the computations, e.g., using micromamba

    ```bash
    micromamba env create \
        --name quarto-env \
        --channel conda-forge \
        jupyter \
        IPython

    # Activate environment
    micromamba activate quarto-env
    ```

</details>

<details>
<summary>Clone this repository locally.</summary>

```bash
git clone https://github.com/NBISweden/quarto-format-advisory-applicants.git
```

</details>

After saving the applicants as a csv in the same folder, render the output.

```bash
# 1) Save applicants file as advisory_student_applications.csv

# 2) Reformat into html and docx
quarto render
```

The results are under the folder `formatted`.

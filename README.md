# Svelte blog with markdown formatted posts

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5651122.svg)](https://doi.org/10.5281/zenodo.5651122)

## Description

SMB is a blog software written in Svelte, Typescript, HTML and CSS. Posts are written in [markdown] format. It is served by [nodejs].

## Data

Metadata describing articles, authors, categories, projects and localisation dictionnaries are placed in the `src/lib/data` folder, are formatted in [yaml] or [markdown] and have a dedicated subfolder: `articles`, `authors`, `categories`, `projects` and `locales`. In order to avoid duplication of data, metadata are linked together with a specific field: `code`.

### Internationalisation

Localisation dictionnaries should be registered in the script `src/lib/i18n/index.ts`.

### Articles

Article files contains two parts: a front matter and a body. The front matter describes metadata of the article (authors, _etc_.) and are formatted in [yaml]. The body is the article itself formatted in [markdown].

```yaml
# A minimum frontmatter example
createdAt: "2021-10-18T11:21:12Z"
code: marked
category: mycategory
authors:
  - me
```

```yaml
# A full frontmatter example
createdAt: "2021-10-18T11:21:12Z"
code: marked
category: mycategory
authors:
  - me
doi: 10.5981/zenodo.5550466
project: myproject
```

In this example:

- the category coded `mycategory` is defined in the `categories/mycategory.yaml` file.
- the author coded `me` is defined in the `authors/me.yaml` file.
- the project coded `myproject` is defined in the `projects/myproject.yaml` file.

[yaml]: https://yaml.org
[markdown]: https://daringfireball.net/projects/markdown/syntax
[nodejs]: https://nodejs.org

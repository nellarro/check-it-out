
const { danger } = require("danger")
const { includes, concat } = require("lodash")

// The Danger DSL can be a bit verbose, so let's rename
const modified = danger.git.modified_files
const newFiles = danger.git.created_files

// Have there actually been changes to our app code vs just README changes
const modifiedAppFiles = modified.filter(p => includes(p, "lib/"))
const modifiedTestFiles = modified.filter(p => includes(p, "__tests__"))

// Pull out specific files, we want to do against them regardless
// of whether they are just created or modified.
const touchedFiles = modified.concat(danger.git.created_files)
const touchedAppOnlyFiles = touchedFiles.filter(p => includes(p, "src/lib/") && !includes(p, "__tests__"))
const touchedComponents = touchedFiles.filter(p => includes(p, "src/lib/components") && !includes(p, "__tests__"))
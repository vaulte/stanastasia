/* =====================================================
   ISSUE DATA
====================================================== */


const issues = {


    march: {

        title:
            "March 2002",

        headline:
            "Spring Term Begins",

        description:
            "The spring semester begins as students return to campus."

    },


    april: {

        title:
            "April 2002",

        headline:
            "New Research Initiative",

        description:
            "The University announces a new coastal research initiative."

    },


    may: {

        title:
            "May 2002",

        headline:
            "University Announces Awards",

        description:
            "Faculty and students are recognized for academic achievement."

    },


    june: {

        title:
            "June 2002",

        headline:
            "Summer Field Work",

        description:
            "Research teams prepare for the summer field season."

    }

};


/* =====================================================
   OPEN ISSUE
====================================================== */


function openIssue(issueName){

    const issue =
        issues[issueName];


    if(!issue){

        return;

    }


    document.getElementById(
        "archiveDescription"
    ).textContent =
        issue.title +
        " — " +
        issue.description;


}


/* =====================================================
   SELECT YEAR
====================================================== */


function selectYear(year){

    document.getElementById(
        "archiveDescription"
    ).textContent =
        "Showing available issues from " +
        year +
        ".";

}


/* =====================================================
   ARTICLE VIEWER
====================================================== */


function openArticle(article){

    const descriptions = {


        research:

            "Article selected: University Announces New Coastal Research Initiative.",


        library:

            "Article selected: Library Announces Extended Archive Access.",


        survey:

            "Article selected: Coastal Survey Concludes."

    };


    document.getElementById(
        "archiveDescription"
    ).textContent =
        descriptions[article];


}


/* =====================================================
   SEARCH
====================================================== */


function searchArchive(){


    const input =
        document.getElementById(
            "searchInput"
        ).value.trim();


    if(input === ""){


        document.getElementById(
            "archiveDescription"
        ).textContent =
            "Please enter a search term.";


        return;

    }


    document.getElementById(
        "archiveDescription"
    ).textContent =
        'Search results for "' +
        input +
        '" will appear here.';


}

document.addEventListener("DOMContentLoaded", () => {
  // Prevent unfinished placeholder links from jumping to the top.
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });

  // Old-browser navigation buttons, when present.
  const navButtons = document.querySelectorAll(".navbtn");
  navButtons[0]?.addEventListener("click", () => history.back());
  navButtons[1]?.addEventListener("click", () => history.forward());
  navButtons[2]?.addEventListener("click", () => location.reload());
});


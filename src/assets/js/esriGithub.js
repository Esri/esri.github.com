var githubSearchURL = 'https://api.github.com/search/repositories';
var sort = 'sort=stars&order=desc';
var githubOrg = 'org:Esri';

function assembleSearchUrl(keywords, language) {
    var query = '?q=';

    if (keywords) {
        keywords = keywords.trim();
        if (keywords.length > 0) {
            query += keywords.replace(/ +/g, '+');
        }
    }
    if (language) {
        language = language.trim();
        if (language.length > 0) {
            query += 'language:' + language.replace(/ +/g, '+');
        }
    }
    query += githubOrg;
    return githubSearchURL + query + '&' + sort;
}

function runGithubSearch() {
    return {
        "total_count": 5,
        "incomplete_results": false,
        "items": [
            {
                "id": 22187946,
                "name": "raster-functions",
                "full_name": "Esri/raster-functions",
                "owner": {
                    "login": "Esri",
                    "id": 628795,
                    "avatar_url": "https://avatars.githubusercontent.com/u/628795?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/Esri",
                    "html_url": "https://github.com/Esri",
                    "followers_url": "https://api.github.com/users/Esri/followers",
                    "following_url": "https://api.github.com/users/Esri/following{/other_user}",
                    "gists_url": "https://api.github.com/users/Esri/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/Esri/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/Esri/subscriptions",
                    "organizations_url": "https://api.github.com/users/Esri/orgs",
                    "repos_url": "https://api.github.com/users/Esri/repos",
                    "events_url": "https://api.github.com/users/Esri/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/Esri/received_events",
                    "type": "Organization",
                    "site_admin": false
                },
                "private": false,
                "html_url": "https://github.com/Esri/raster-functions",
                "description": "A curated set of lightweight but powerful tools for on-the-fly image processing and raster analysis in ArcGIS.",
                "fork": false,
                "url": "https://api.github.com/repos/Esri/raster-functions",
                "forks_url": "https://api.github.com/repos/Esri/raster-functions/forks",
                "keys_url": "https://api.github.com/repos/Esri/raster-functions/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/Esri/raster-functions/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/Esri/raster-functions/teams",
                "hooks_url": "https://api.github.com/repos/Esri/raster-functions/hooks",
                "issue_events_url": "https://api.github.com/repos/Esri/raster-functions/issues/events{/number}",
                "events_url": "https://api.github.com/repos/Esri/raster-functions/events",
                "assignees_url": "https://api.github.com/repos/Esri/raster-functions/assignees{/user}",
                "branches_url": "https://api.github.com/repos/Esri/raster-functions/branches{/branch}",
                "tags_url": "https://api.github.com/repos/Esri/raster-functions/tags",
                "blobs_url": "https://api.github.com/repos/Esri/raster-functions/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/Esri/raster-functions/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/Esri/raster-functions/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/Esri/raster-functions/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/Esri/raster-functions/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/Esri/raster-functions/languages",
                "stargazers_url": "https://api.github.com/repos/Esri/raster-functions/stargazers",
                "contributors_url": "https://api.github.com/repos/Esri/raster-functions/contributors",
                "subscribers_url": "https://api.github.com/repos/Esri/raster-functions/subscribers",
                "subscription_url": "https://api.github.com/repos/Esri/raster-functions/subscription",
                "commits_url": "https://api.github.com/repos/Esri/raster-functions/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/Esri/raster-functions/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/Esri/raster-functions/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/Esri/raster-functions/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/Esri/raster-functions/contents/{+path}",
                "compare_url": "https://api.github.com/repos/Esri/raster-functions/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/Esri/raster-functions/merges",
                "archive_url": "https://api.github.com/repos/Esri/raster-functions/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/Esri/raster-functions/downloads",
                "issues_url": "https://api.github.com/repos/Esri/raster-functions/issues{/number}",
                "pulls_url": "https://api.github.com/repos/Esri/raster-functions/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/Esri/raster-functions/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/Esri/raster-functions/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/Esri/raster-functions/labels{/name}",
                "releases_url": "https://api.github.com/repos/Esri/raster-functions/releases{/id}",
                "deployments_url": "https://api.github.com/repos/Esri/raster-functions/deployments",
                "created_at": "2014-07-24T00:13:43Z",
                "updated_at": "2017-01-13T06:32:12Z",
                "pushed_at": "2016-12-27T19:23:40Z",
                "git_url": "git://github.com/Esri/raster-functions.git",
                "ssh_url": "git@github.com:Esri/raster-functions.git",
                "clone_url": "https://github.com/Esri/raster-functions.git",
                "svn_url": "https://github.com/Esri/raster-functions",
                "homepage": "",
                "size": 3336,
                "stargazers_count": 68,
                "watchers_count": 68,
                "language": "Python",
                "has_issues": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 26,
                "mirror_url": null,
                "open_issues_count": 15,
                "forks": 26,
                "open_issues": 15,
                "watchers": 68,
                "default_branch": "master",
                "score": 32.489517
            },
            {
                "id": 36093520,
                "name": "raster2gpkg",
                "full_name": "Esri/raster2gpkg",
                "owner": {
                    "login": "Esri",
                    "id": 628795,
                    "avatar_url": "https://avatars.githubusercontent.com/u/628795?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/Esri",
                    "html_url": "https://github.com/Esri",
                    "followers_url": "https://api.github.com/users/Esri/followers",
                    "following_url": "https://api.github.com/users/Esri/following{/other_user}",
                    "gists_url": "https://api.github.com/users/Esri/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/Esri/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/Esri/subscriptions",
                    "organizations_url": "https://api.github.com/users/Esri/orgs",
                    "repos_url": "https://api.github.com/users/Esri/repos",
                    "events_url": "https://api.github.com/users/Esri/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/Esri/received_events",
                    "type": "Organization",
                    "site_admin": false
                },
                "private": false,
                "html_url": "https://github.com/Esri/raster2gpkg",
                "description": "Python based Geoprocessing tool that loads jpeg or png images to a GeoPackage",
                "fork": false,
                "url": "https://api.github.com/repos/Esri/raster2gpkg",
                "forks_url": "https://api.github.com/repos/Esri/raster2gpkg/forks",
                "keys_url": "https://api.github.com/repos/Esri/raster2gpkg/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/Esri/raster2gpkg/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/Esri/raster2gpkg/teams",
                "hooks_url": "https://api.github.com/repos/Esri/raster2gpkg/hooks",
                "issue_events_url": "https://api.github.com/repos/Esri/raster2gpkg/issues/events{/number}",
                "events_url": "https://api.github.com/repos/Esri/raster2gpkg/events",
                "assignees_url": "https://api.github.com/repos/Esri/raster2gpkg/assignees{/user}",
                "branches_url": "https://api.github.com/repos/Esri/raster2gpkg/branches{/branch}",
                "tags_url": "https://api.github.com/repos/Esri/raster2gpkg/tags",
                "blobs_url": "https://api.github.com/repos/Esri/raster2gpkg/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/Esri/raster2gpkg/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/Esri/raster2gpkg/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/Esri/raster2gpkg/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/Esri/raster2gpkg/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/Esri/raster2gpkg/languages",
                "stargazers_url": "https://api.github.com/repos/Esri/raster2gpkg/stargazers",
                "contributors_url": "https://api.github.com/repos/Esri/raster2gpkg/contributors",
                "subscribers_url": "https://api.github.com/repos/Esri/raster2gpkg/subscribers",
                "subscription_url": "https://api.github.com/repos/Esri/raster2gpkg/subscription",
                "commits_url": "https://api.github.com/repos/Esri/raster2gpkg/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/Esri/raster2gpkg/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/Esri/raster2gpkg/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/Esri/raster2gpkg/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/Esri/raster2gpkg/contents/{+path}",
                "compare_url": "https://api.github.com/repos/Esri/raster2gpkg/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/Esri/raster2gpkg/merges",
                "archive_url": "https://api.github.com/repos/Esri/raster2gpkg/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/Esri/raster2gpkg/downloads",
                "issues_url": "https://api.github.com/repos/Esri/raster2gpkg/issues{/number}",
                "pulls_url": "https://api.github.com/repos/Esri/raster2gpkg/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/Esri/raster2gpkg/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/Esri/raster2gpkg/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/Esri/raster2gpkg/labels{/name}",
                "releases_url": "https://api.github.com/repos/Esri/raster2gpkg/releases{/id}",
                "deployments_url": "https://api.github.com/repos/Esri/raster2gpkg/deployments",
                "created_at": "2015-05-22T20:20:35Z",
                "updated_at": "2016-11-04T18:49:32Z",
                "pushed_at": "2016-11-04T18:49:30Z",
                "git_url": "git://github.com/Esri/raster2gpkg.git",
                "ssh_url": "git@github.com:Esri/raster2gpkg.git",
                "clone_url": "https://github.com/Esri/raster2gpkg.git",
                "svn_url": "https://github.com/Esri/raster2gpkg",
                "homepage": "",
                "size": 29479,
                "stargazers_count": 7,
                "watchers_count": 7,
                "language": "Python",
                "has_issues": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 2,
                "mirror_url": null,
                "open_issues_count": 0,
                "forks": 2,
                "open_issues": 0,
                "watchers": 7,
                "default_branch": "master",
                "score": 11.206723
            },
            {
                "id": 26196225,
                "name": "weighted-raster-overlay-service-toolbox",
                "full_name": "Esri/weighted-raster-overlay-service-toolbox",
                "owner": {
                    "login": "Esri",
                    "id": 628795,
                    "avatar_url": "https://avatars.githubusercontent.com/u/628795?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/Esri",
                    "html_url": "https://github.com/Esri",
                    "followers_url": "https://api.github.com/users/Esri/followers",
                    "following_url": "https://api.github.com/users/Esri/following{/other_user}",
                    "gists_url": "https://api.github.com/users/Esri/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/Esri/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/Esri/subscriptions",
                    "organizations_url": "https://api.github.com/users/Esri/orgs",
                    "repos_url": "https://api.github.com/users/Esri/repos",
                    "events_url": "https://api.github.com/users/Esri/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/Esri/received_events",
                    "type": "Organization",
                    "site_admin": false
                },
                "private": false,
                "html_url": "https://github.com/Esri/weighted-raster-overlay-service-toolbox",
                "description": "Tools to help you setup a mosaic dataset to support fast, web-based suitability analysis",
                "fork": false,
                "url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox",
                "forks_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/forks",
                "keys_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/teams",
                "hooks_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/hooks",
                "issue_events_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/issues/events{/number}",
                "events_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/events",
                "assignees_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/assignees{/user}",
                "branches_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/branches{/branch}",
                "tags_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/tags",
                "blobs_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/languages",
                "stargazers_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/stargazers",
                "contributors_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/contributors",
                "subscribers_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/subscribers",
                "subscription_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/subscription",
                "commits_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/contents/{+path}",
                "compare_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/merges",
                "archive_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/downloads",
                "issues_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/issues{/number}",
                "pulls_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/labels{/name}",
                "releases_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/releases{/id}",
                "deployments_url": "https://api.github.com/repos/Esri/weighted-raster-overlay-service-toolbox/deployments",
                "created_at": "2014-11-05T00:58:47Z",
                "updated_at": "2016-04-28T08:14:33Z",
                "pushed_at": "2016-04-29T16:36:44Z",
                "git_url": "git://github.com/Esri/weighted-raster-overlay-service-toolbox.git",
                "ssh_url": "git@github.com:Esri/weighted-raster-overlay-service-toolbox.git",
                "clone_url": "https://github.com/Esri/weighted-raster-overlay-service-toolbox.git",
                "svn_url": "https://github.com/Esri/weighted-raster-overlay-service-toolbox",
                "homepage": "",
                "size": 1322,
                "stargazers_count": 6,
                "watchers_count": 6,
                "language": "Python",
                "has_issues": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 8,
                "mirror_url": null,
                "open_issues_count": 0,
                "forks": 8,
                "open_issues": 0,
                "watchers": 6,
                "default_branch": "master",
                "score": 14.902856
            },
            {
                "id": 30081143,
                "name": "solutions-raster-functions",
                "full_name": "Esri/solutions-raster-functions",
                "owner": {
                    "login": "Esri",
                    "id": 628795,
                    "avatar_url": "https://avatars.githubusercontent.com/u/628795?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/Esri",
                    "html_url": "https://github.com/Esri",
                    "followers_url": "https://api.github.com/users/Esri/followers",
                    "following_url": "https://api.github.com/users/Esri/following{/other_user}",
                    "gists_url": "https://api.github.com/users/Esri/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/Esri/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/Esri/subscriptions",
                    "organizations_url": "https://api.github.com/users/Esri/orgs",
                    "repos_url": "https://api.github.com/users/Esri/repos",
                    "events_url": "https://api.github.com/users/Esri/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/Esri/received_events",
                    "type": "Organization",
                    "site_admin": false
                },
                "private": false,
                "html_url": "https://github.com/Esri/solutions-raster-functions",
                "description": "Raster functions can be applied to raster datasets and mosaic datasets for fast, accurate analytic capabilities.",
                "fork": false,
                "url": "https://api.github.com/repos/Esri/solutions-raster-functions",
                "forks_url": "https://api.github.com/repos/Esri/solutions-raster-functions/forks",
                "keys_url": "https://api.github.com/repos/Esri/solutions-raster-functions/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/Esri/solutions-raster-functions/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/Esri/solutions-raster-functions/teams",
                "hooks_url": "https://api.github.com/repos/Esri/solutions-raster-functions/hooks",
                "issue_events_url": "https://api.github.com/repos/Esri/solutions-raster-functions/issues/events{/number}",
                "events_url": "https://api.github.com/repos/Esri/solutions-raster-functions/events",
                "assignees_url": "https://api.github.com/repos/Esri/solutions-raster-functions/assignees{/user}",
                "branches_url": "https://api.github.com/repos/Esri/solutions-raster-functions/branches{/branch}",
                "tags_url": "https://api.github.com/repos/Esri/solutions-raster-functions/tags",
                "blobs_url": "https://api.github.com/repos/Esri/solutions-raster-functions/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/Esri/solutions-raster-functions/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/Esri/solutions-raster-functions/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/Esri/solutions-raster-functions/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/Esri/solutions-raster-functions/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/Esri/solutions-raster-functions/languages",
                "stargazers_url": "https://api.github.com/repos/Esri/solutions-raster-functions/stargazers",
                "contributors_url": "https://api.github.com/repos/Esri/solutions-raster-functions/contributors",
                "subscribers_url": "https://api.github.com/repos/Esri/solutions-raster-functions/subscribers",
                "subscription_url": "https://api.github.com/repos/Esri/solutions-raster-functions/subscription",
                "commits_url": "https://api.github.com/repos/Esri/solutions-raster-functions/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/Esri/solutions-raster-functions/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/Esri/solutions-raster-functions/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/Esri/solutions-raster-functions/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/Esri/solutions-raster-functions/contents/{+path}",
                "compare_url": "https://api.github.com/repos/Esri/solutions-raster-functions/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/Esri/solutions-raster-functions/merges",
                "archive_url": "https://api.github.com/repos/Esri/solutions-raster-functions/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/Esri/solutions-raster-functions/downloads",
                "issues_url": "https://api.github.com/repos/Esri/solutions-raster-functions/issues{/number}",
                "pulls_url": "https://api.github.com/repos/Esri/solutions-raster-functions/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/Esri/solutions-raster-functions/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/Esri/solutions-raster-functions/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/Esri/solutions-raster-functions/labels{/name}",
                "releases_url": "https://api.github.com/repos/Esri/solutions-raster-functions/releases{/id}",
                "deployments_url": "https://api.github.com/repos/Esri/solutions-raster-functions/deployments",
                "created_at": "2015-01-30T16:46:21Z",
                "updated_at": "2016-09-13T15:29:19Z",
                "pushed_at": "2016-09-13T15:10:26Z",
                "git_url": "git://github.com/Esri/solutions-raster-functions.git",
                "ssh_url": "git@github.com:Esri/solutions-raster-functions.git",
                "clone_url": "https://github.com/Esri/solutions-raster-functions.git",
                "svn_url": "https://github.com/Esri/solutions-raster-functions",
                "homepage": null,
                "size": 10493,
                "stargazers_count": 5,
                "watchers_count": 5,
                "language": "Python",
                "has_issues": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 0,
                "mirror_url": null,
                "open_issues_count": 1,
                "forks": 0,
                "open_issues": 1,
                "watchers": 5,
                "default_branch": "master",
                "score": 7.156713
            },
            {
                "id": 72654563,
                "name": "raster-tiles-compactcache",
                "full_name": "Esri/raster-tiles-compactcache",
                "owner": {
                    "login": "Esri",
                    "id": 628795,
                    "avatar_url": "https://avatars.githubusercontent.com/u/628795?v=3",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/Esri",
                    "html_url": "https://github.com/Esri",
                    "followers_url": "https://api.github.com/users/Esri/followers",
                    "following_url": "https://api.github.com/users/Esri/following{/other_user}",
                    "gists_url": "https://api.github.com/users/Esri/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/Esri/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/Esri/subscriptions",
                    "organizations_url": "https://api.github.com/users/Esri/orgs",
                    "repos_url": "https://api.github.com/users/Esri/repos",
                    "events_url": "https://api.github.com/users/Esri/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/Esri/received_events",
                    "type": "Organization",
                    "site_admin": false
                },
                "private": false,
                "html_url": "https://github.com/Esri/raster-tiles-compactcache",
                "description": null,
                "fork": false,
                "url": "https://api.github.com/repos/Esri/raster-tiles-compactcache",
                "forks_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/forks",
                "keys_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/teams",
                "hooks_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/hooks",
                "issue_events_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/issues/events{/number}",
                "events_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/events",
                "assignees_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/assignees{/user}",
                "branches_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/branches{/branch}",
                "tags_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/tags",
                "blobs_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/languages",
                "stargazers_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/stargazers",
                "contributors_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/contributors",
                "subscribers_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/subscribers",
                "subscription_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/subscription",
                "commits_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/contents/{+path}",
                "compare_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/merges",
                "archive_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/downloads",
                "issues_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/issues{/number}",
                "pulls_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/labels{/name}",
                "releases_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/releases{/id}",
                "deployments_url": "https://api.github.com/repos/Esri/raster-tiles-compactcache/deployments",
                "created_at": "2016-11-02T15:39:17Z",
                "updated_at": "2016-12-27T18:55:43Z",
                "pushed_at": "2016-12-30T18:50:18Z",
                "git_url": "git://github.com/Esri/raster-tiles-compactcache.git",
                "ssh_url": "git@github.com:Esri/raster-tiles-compactcache.git",
                "clone_url": "https://github.com/Esri/raster-tiles-compactcache.git",
                "svn_url": "https://github.com/Esri/raster-tiles-compactcache",
                "homepage": null,
                "size": 1013,
                "stargazers_count": 0,
                "watchers_count": 0,
                "language": "Python",
                "has_issues": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 0,
                "mirror_url": null,
                "open_issues_count": 0,
                "forks": 0,
                "open_issues": 0,
                "watchers": 0,
                "default_branch": "master",
                "score": 4.267493
            }
        ]
    };
}
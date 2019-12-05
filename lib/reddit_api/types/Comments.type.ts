// To parse this data:
//
//   import { Convert, Comments } from "./file";
//
//   const comments = Convert.toComments(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Comments {
    kind: string;
    data: CommentsData;
}

export interface CommentsData {
    modhash:  string;
    dist:     number;
    children: Child[];
    after:    string;
    before:   null;
}

type ChildData = T1_Data | T3_Data

export interface Child {
    kind: Kind;
    data: ChildData;
}

export interface T3_Data {
    approved_at_utc:               null;
    subreddit:                     string;
    selftext:                      string;
    author_fullname:               string;
    saved:                         boolean;
    mod_reason_title:              null;
    gilded:                        number;
    clicked:                       boolean;
    title:                         string;
    link_flair_richtext:           any[];
    subreddit_name_prefixed:       string;
    hidden:                        boolean;
    pwls:                          null;
    link_flair_css_class:          null;
    downs:                         number;
    thumbnail_height:              null;
    hide_score:                    boolean;
    name:                          string;
    quarantine:                    boolean;
    link_flair_text_color:         string;
    author_flair_background_color: null;
    subreddit_type:                string;
    ups:                           number;
    total_awards_received:         number;
    media_embed:                   Gildings;
    thumbnail_width:               null;
    author_flair_template_id:      null;
    is_original_content:           boolean;
    user_reports:                  any[];
    secure_media:                  null;
    is_reddit_media_domain:        boolean;
    is_meta:                       boolean;
    category:                      null;
    secure_media_embed:            Gildings;
    link_flair_text:               null;
    can_mod_post:                  boolean;
    score:                         number;
    approved_by:                   null;
    author_premium:                boolean;
    thumbnail:                     string;
    edited:                        boolean;
    author_flair_css_class:        null;
    steward_reports:               any[];
    author_flair_richtext:         any[];
    gildings:                      Gildings;
    content_categories:            null;
    is_self:                       boolean;
    mod_note:                      null;
    created:                       number;
    link_flair_type:               string;
    wls:                           null;
    removed_by_category:           null;
    banned_by:                     null;
    author_flair_type:             string;
    domain:                        string;
    allow_live_comments:           boolean;
    selftext_html:                 null;
    likes:                         null;
    suggested_sort:                null;
    banned_at_utc:                 null;
    view_count:                    null;
    archived:                      boolean;
    no_follow:                     boolean;
    is_crosspostable:              boolean;
    pinned:                        boolean;
    over_18:                       boolean;
    all_awardings:                 any[];
    awarders:                      any[];
    media_only:                    boolean;
    can_gild:                      boolean;
    spoiler:                       boolean;
    locked:                        boolean;
    author_flair_text:             null;
    visited:                       boolean;
    removed_by:                    null;
    num_reports:                   null;
    distinguished:                 null;
    subreddit_id:                  string;
    mod_reason_by:                 null;
    removal_reason:                null;
    link_flair_background_color:   string;
    id:                            string;
    is_robot_indexable:            boolean;
    report_reasons:                null;
    author:                        string;
    discussion_type:               null;
    num_comments:                  number;
    send_replies:                  boolean;
    whitelist_status:              null;
    contest_mode:                  boolean;
    mod_reports:                   any[];
    author_patreon_flair:          boolean;
    author_flair_text_color:       null;
    permalink:                     string;
    parent_whitelist_status:       null;
    stickied:                      boolean;
    url:                           string;
    subreddit_subscribers:         number;
    created_utc:                   number;
    num_crossposts:                number;
    media:                         null;
    is_video:                      boolean;
}

export interface T1_Data {
    awarders:                        any[];
    total_awards_received:           number;
    approved_at_utc:                 null;
    link_title:                      string;
    mod_reason_by:                   null;
    banned_by:                       null;
    author_flair_type:               AuthorFlairType;
    removal_reason:                  null;
    link_id:                         string;
    author_flair_template_id:        null | string;
    likes:                           null;
    replies:                         string;
    user_reports:                    any[];
    saved:                           boolean;
    id:                              string;
    banned_at_utc:                   null;
    mod_reason_title:                null;
    gilded:                          number;
    archived:                        boolean;
    no_follow:                       boolean;
    author:                          string;
    num_comments:                    number;
    can_mod_post:                    boolean;
    created_utc:                     number;
    send_replies:                    boolean;
    parent_id:                       string;
    score:                           number;
    author_fullname:                 string;
    over_18:                         boolean;
    approved_by:                     null;
    mod_note:                        null;
    all_awardings:                   any[];
    subreddit_id:                    SubredditID;
    body:                            string;
    edited:                          Edited;
    author_flair_css_class:          null | string;
    name:                            string;
    steward_reports:                 any[];
    author_patreon_flair:            boolean;
    downs:                           number;
    author_flair_richtext:           any[];
    is_submitter:                    boolean;
    body_html:                       string;
    gildings:                        Gildings;
    collapsed_reason:                null;
    distinguished:                   null;
    associated_award:                null;
    stickied:                        boolean;
    author_premium:                  boolean;
    can_gild:                        boolean;
    subreddit:                       Subreddit;
    author_flair_text_color:         null | string;
    score_hidden:                    boolean;
    permalink:                       string;
    num_reports:                     null;
    link_permalink:                  string;
    report_reasons:                  null;
    link_author:                     string;
    author_flair_text:               null | string;
    link_url:                        string;
    created:                         number;
    collapsed:                       boolean;
    subreddit_name_prefixed:         SubredditNamePrefixed;
    controversiality:                number;
    locked:                          boolean;
    author_flair_background_color:   null | string;
    collapsed_because_crowd_control: null;
    mod_reports:                     any[];
    quarantine:                      boolean;
    subreddit_type:                  SubredditType;
    ups:                             number;
}

export enum AuthorFlairType {
    Text = "text",
}

export type Edited = boolean | number;

export interface Gildings {
}

export enum Subreddit {
    Singapore = "singapore",
}

export enum SubredditID {
    T52Qh8C = "t5_2qh8c",
}

export enum SubredditNamePrefixed {
    RSingapore = "r/singapore",
}

export enum SubredditType {
    Public = "public",
}

export enum Kind {
    Comment = "t1",
    Thread = "t3",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toComments(json: string): Comments {
        return cast(JSON.parse(json), r("Comments"));
    }

    public static commentsToJson(value: Comments): string {
        return JSON.stringify(uncast(value, r("Comments")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Comments": o([
        { json: "kind", js: "kind", typ: "" },
        { json: "data", js: "data", typ: r("CommentsData") },
    ], false),
    "CommentsData": o([
        { json: "modhash", js: "modhash", typ: "" },
        { json: "dist", js: "dist", typ: 0 },
        { json: "children", js: "children", typ: a(r("Child")) },
        { json: "after", js: "after", typ: "" },
        { json: "before", js: "before", typ: null },
    ], false),
    "Child": o([
        { json: "kind", js: "kind", typ: r("Kind") },
        { json: "data", js: "data", typ: r("ChildData") },
    ], false),
    "ChildData": o([
        { json: "awarders", js: "awarders", typ: a("any") },
        { json: "total_awards_received", js: "total_awards_received", typ: 0 },
        { json: "approved_at_utc", js: "approved_at_utc", typ: null },
        { json: "link_title", js: "link_title", typ: "" },
        { json: "mod_reason_by", js: "mod_reason_by", typ: null },
        { json: "banned_by", js: "banned_by", typ: null },
        { json: "author_flair_type", js: "author_flair_type", typ: r("AuthorFlairType") },
        { json: "removal_reason", js: "removal_reason", typ: null },
        { json: "link_id", js: "link_id", typ: "" },
        { json: "author_flair_template_id", js: "author_flair_template_id", typ: u(null, "") },
        { json: "likes", js: "likes", typ: null },
        { json: "replies", js: "replies", typ: "" },
        { json: "user_reports", js: "user_reports", typ: a("any") },
        { json: "saved", js: "saved", typ: true },
        { json: "id", js: "id", typ: "" },
        { json: "banned_at_utc", js: "banned_at_utc", typ: null },
        { json: "mod_reason_title", js: "mod_reason_title", typ: null },
        { json: "gilded", js: "gilded", typ: 0 },
        { json: "archived", js: "archived", typ: true },
        { json: "no_follow", js: "no_follow", typ: true },
        { json: "author", js: "author", typ: "" },
        { json: "num_comments", js: "num_comments", typ: 0 },
        { json: "can_mod_post", js: "can_mod_post", typ: true },
        { json: "created_utc", js: "created_utc", typ: 0 },
        { json: "send_replies", js: "send_replies", typ: true },
        { json: "parent_id", js: "parent_id", typ: "" },
        { json: "score", js: "score", typ: 0 },
        { json: "author_fullname", js: "author_fullname", typ: "" },
        { json: "over_18", js: "over_18", typ: true },
        { json: "approved_by", js: "approved_by", typ: null },
        { json: "mod_note", js: "mod_note", typ: null },
        { json: "all_awardings", js: "all_awardings", typ: a("any") },
        { json: "subreddit_id", js: "subreddit_id", typ: r("SubredditID") },
        { json: "body", js: "body", typ: "" },
        { json: "edited", js: "edited", typ: u(true, 0) },
        { json: "author_flair_css_class", js: "author_flair_css_class", typ: u(null, "") },
        { json: "name", js: "name", typ: "" },
        { json: "steward_reports", js: "steward_reports", typ: a("any") },
        { json: "author_patreon_flair", js: "author_patreon_flair", typ: true },
        { json: "downs", js: "downs", typ: 0 },
        { json: "author_flair_richtext", js: "author_flair_richtext", typ: a("any") },
        { json: "is_submitter", js: "is_submitter", typ: true },
        { json: "body_html", js: "body_html", typ: "" },
        { json: "gildings", js: "gildings", typ: r("Gildings") },
        { json: "collapsed_reason", js: "collapsed_reason", typ: null },
        { json: "distinguished", js: "distinguished", typ: null },
        { json: "associated_award", js: "associated_award", typ: null },
        { json: "stickied", js: "stickied", typ: true },
        { json: "author_premium", js: "author_premium", typ: true },
        { json: "can_gild", js: "can_gild", typ: true },
        { json: "subreddit", js: "subreddit", typ: r("Subreddit") },
        { json: "author_flair_text_color", js: "author_flair_text_color", typ: u(null, "") },
        { json: "score_hidden", js: "score_hidden", typ: true },
        { json: "permalink", js: "permalink", typ: "" },
        { json: "num_reports", js: "num_reports", typ: null },
        { json: "link_permalink", js: "link_permalink", typ: "" },
        { json: "report_reasons", js: "report_reasons", typ: null },
        { json: "link_author", js: "link_author", typ: "" },
        { json: "author_flair_text", js: "author_flair_text", typ: u(null, "") },
        { json: "link_url", js: "link_url", typ: "" },
        { json: "created", js: "created", typ: 0 },
        { json: "collapsed", js: "collapsed", typ: true },
        { json: "subreddit_name_prefixed", js: "subreddit_name_prefixed", typ: r("SubredditNamePrefixed") },
        { json: "controversiality", js: "controversiality", typ: 0 },
        { json: "locked", js: "locked", typ: true },
        { json: "author_flair_background_color", js: "author_flair_background_color", typ: u(null, "") },
        { json: "collapsed_because_crowd_control", js: "collapsed_because_crowd_control", typ: null },
        { json: "mod_reports", js: "mod_reports", typ: a("any") },
        { json: "quarantine", js: "quarantine", typ: true },
        { json: "subreddit_type", js: "subreddit_type", typ: r("SubredditType") },
        { json: "ups", js: "ups", typ: 0 },
    ], false),
    "Gildings": o([
    ], false),
    "AuthorFlairType": [
        "text",
    ],
    "Subreddit": [
        "singapore",
    ],
    "SubredditID": [
        "t5_2qh8c",
    ],
    "SubredditNamePrefixed": [
        "r/singapore",
    ],
    "SubredditType": [
        "public",
    ],
    "Kind": [
        "t1",
    ],
};

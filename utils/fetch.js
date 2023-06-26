import { isArray, each } from "lodash";
import fetch from "isomorphic-unfetch";
import Cookies from "js-cookie";

// const API = process.env.WEB 
// const API = "http://pbsv1.techainer.com:4784"
// const COOKIE_USER = process.env.COOKIE_USER;
// const COOKIE_ANONYMOUS = process.env.COOKIE_ANONYMOUS;



const getSessionId = (sessionId) => {
  // const cookieToken = Cookies.get(COOKIE_USER) || Cookies.get(COOKIE_ANONYMOUS);
  // return sessionId || cookieToken;
  return null
};

export class Fetch {
  static async fetch(url, method, body = null, headers = {}) {
    const controller = new AbortController();
    const signal = controller.signal;

    // const fullUrl = `${API}${url}`;
    const timer = setTimeout(() => {
      controller.abort()
    }, 60 * 1000)

    return fetch(url, {
      method,
      signal,
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
        ...headers
      },
      body
      // body: body ? JSON.stringify(body) : null
    }).then((res) => {
      clearTimeout(timer)
      return res
    }).catch(e => {
      return { status: 500 }
    });
  }

  static async ajax(url, sessionId, method, body, headers) {
    const token = getSessionId(sessionId);

    return Fetch.fetch(url, method, body, {
      ...headers,
      // authorization: `Bearer ${token}`
    });
  }

  static get(url, token, headers = {}) {
    return Fetch.ajax(url, token, "GET", null, headers);
  }

  static put(url, token, body, headers = {}) {
    return Fetch.ajax(url, token, "PUT", body, headers);
  }

  static post(url, token, body, headers = {}) {
    return Fetch.ajax(url, token, "POST", body, headers);
  }

  static delete(url, token, body = {}, headers = {}) {
    return Fetch.ajax(url, token, "DELETE", body, headers);
  }

  static upload(url, key, value, sessionId) {
    const token = getSessionId(sessionId);
    
    return new Promise(resolve => {
      const body = new FormData();

      if (!isArray(value)) {
        value = [value];
      }

      each(value, entity => {
        body.append(key, entity);
      });

      const xhr = new XMLHttpRequest();

      xhr.timeout = 120000;

      xhr.onreadystatechange = e => {
        if (xhr.readyState !== 4) {
          return;
        }

        if (xhr.status === 200) {
          return resolve(JSON.parse(xhr.responseText));
        } else {
          //return reject('Oops...');
        }
      };

      xhr.open("POST", `${process.env.API}${url}`);
      // xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr.send(body);
    });
  }
}

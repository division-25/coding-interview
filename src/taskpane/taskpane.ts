/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
import { fluentOption, fluentListbox, Select, Button, Dialog, fluentButton, fluentDialog, provideFluentDesignSystem, fluentSelect, fluentCheckbox } from "@fluentui/web-components";

import { authenticateWithAdminPanel, getUserInfo, refreshAuthToken } from "../api/admin";
import { UserInfo } from "../model/model";

/* global console, document, Excel, Office */

// loading spinner element overlay
const dialogSpinnerOverlay: HTMLElement = document.getElementById('progressSpinnerOverlay')
showSpinnerOverlay(false);

const dialogElement: Dialog = document.getElementById('defaultDialog') as Dialog;
const dialogCloser: Button = document.getElementById('dialogCloser') as Button;
dialogCloser.onclick = closeDialog;

export let USER_INFO: UserInfo = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  title: null,
  isGlobalAdmin: false,
  organizations: []
}

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";

    document.getElementById("final-estimate").onclick = downloadFinalEstimate;
    document.getElementById("log-in").onclick = login;
    document.getElementById("log-out").onclick = logout;
  }

  initializeUser(info.host)
});

export function showSpinnerOverlay(status: boolean = true) {
  dialogSpinnerOverlay.hidden = !status;
}

async function initializeUser(app: Office.HostType) {
  try {
    const token = await refreshAuthToken() // TODO track expiration and refresh token automatically.
    if (token === null) return
    USER_INFO = await getUserInfo(token)
  
    displayUserInfo(USER_INFO, app)
  } catch (error) {
    // 
  }
}

async function login() {
  let token = null

  try {
    token = await authenticateWithAdminPanel((<HTMLInputElement>document.getElementById("username")).value, (<HTMLInputElement>document.getElementById("password")).value)
    USER_INFO = await getUserInfo(token)

    displayUserInfo(USER_INFO, Office.HostType.Excel)
  } catch (error) {
    openDialogWithMessage(error.message)
    
  }
  return
}

async function logout() {
  const token = null

  // null user
  USER_INFO = {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    title: null,
    isGlobalAdmin: false,
    organizations: []
  }
  displayUserInfo(null, Office.HostType.Excel)

  return USER_INFO
}


export async function displayUserInfo(userInfo: UserInfo, app: Office.HostType) {
  try {
      const usersNameElement = document.getElementById("users-name")
      const welcomeBanner = document.getElementById("welcome-banner")
      const welcomeMessage = document.getElementById("welcome-message")
      const userMessageExcel = document.getElementById("user-message-excel")
      const userMessageWord = document.getElementById("user-message-word")
      const loginButton = document.getElementById("log-in")
      const logoutButton = document.getElementById("log-out")


      if (userInfo) {
        loginButton.hidden = true;
        logoutButton.hidden = false;
        welcomeBanner.style.display = "none"
        welcomeMessage.style.display = "none"

        switch(app) {
          case Office.HostType.Word:
            userMessageWord.style.display = "block"
            userMessageExcel.style.display = "none"
            break;
          case Office.HostType.Excel:
            userMessageWord.style.display = "none"
            userMessageExcel.style.display = "block"
            break;
        }

        usersNameElement.style.display = "block"
        usersNameElement.innerHTML = `Hello, ${userInfo.firstName} ${userInfo.lastName}`;
        (<HTMLInputElement>document.getElementById("username")).value = userInfo.email;
      } else {
        loginButton.hidden = false;
        logoutButton.hidden = true;
        welcomeBanner.style.display = "block"
        welcomeMessage.style.display = "block"

        switch(app) {
          case Office.HostType.Word:
            userMessageWord.style.display = "block"
            userMessageExcel.style.display = "none"
            break;
          case Office.HostType.Excel:
            userMessageWord.style.display = "none"
            userMessageExcel.style.display = "block"
            break;
        }
        usersNameElement.innerHTML = null;
        usersNameElement.style.display = "none"
      }

  } catch (error) {
    console.error(error);
  }
}


export function openDialogWithMessage(message: string)  {
  const dialogMessage = document.getElementById('dialog-message');
  dialogMessage.innerHTML = message
  dialogElement.hidden = false;
}

export function closeDialog() : void {
  dialogElement.hidden = true;
}

export async function downloadFinalEstimate() {
  showSpinnerOverlay();

  /**
   * Add your code here
   */
  const projectId = Number.parseInt((<HTMLInputElement>document.getElementById("projectId")).value);

  showSpinnerOverlay(false);
}
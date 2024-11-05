import { Estimate, FinalEstimateList, ProjectInfo, UserInfo } from "../model/model"

const ADMIN_PANEL_BASE_ENDPOINT = "https://api.admin.div25.com/api/"
const ADMIN_PANEL_AUTHENTICATION_ENDPOINT = `${ADMIN_PANEL_BASE_ENDPOINT}/auth`
let AUTHENTICATION_TOKEN: string = null


export async function authenticateWithAdminPanel(username: string, password: string): Promise<string> {
  const FETCH_OPTIONS = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json, text/plain, */*",
    },
    body: `{"email":"${username}","password":"${password}","rememberMe":false}`,
    
  }

try {
  const response = await fetch(ADMIN_PANEL_AUTHENTICATION_ENDPOINT, FETCH_OPTIONS)

  // Return an error on a bad request. Can happen for a number of reason
  if (!response.ok) {
    throw new Error(`Error ${response.status}: Incorrect Username or Password`)
  }

  // console.log('response:', response)
  const data: any = await response.json()
  
  localStorage.setItem("ats-dart-sales__auth-token", JSON.stringify({token:data.token}));
  return data.token

  } catch (error) {
    console.log('error:', error)
    throw error;
  }
}

export async function getUserInfo(token: string): Promise<UserInfo> {

  const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Length': graphQlQuery.length.toString(),
      'Accept': "application/json, text/plain, */*",
      "Authorization": `Bearer ${token}`
    },
  }

  try {
    const response = await fetch(ADMIN_PANEL_AUTHENTICATION_ENDPOINT, FETCH_OPTIONS)

    // Return an error on a bad request. Can happen for a number of reason
    if (!response.ok) {
      throw new Error(`Sorry, something went wrong!: ${response.status}`)
    }

    // console.log('response:', response)
    const data:any = await response.json()
    // console.log('data:', data)

    return data

  } catch (error) {
    console.log('error:', error)
    throw new Error(`Sorry, something went wrong!`)
  }
}

export async function refreshAuthToken(): Promise<string> {
  let tokenObj = JSON.parse(localStorage.getItem("ats-dart-sales__auth-token"));
  const token = tokenObj.token;

  return null
}

/**
 * Get info from Project Base Estimate
 * @param estimateId 
 */
export async function getProjectInfoFromBaseEstimate(estimateId: number): Promise<ProjectInfo> {
  // use ADMIN_PANEL_BASE_ENDPOINT to construct the endpoint URL
}

/**
 * Get list of Final Estimates in project
 * @param estimateId 
 */
export async function getListProjectFinalEstimates(estimateId: number): Promise<FinalEstimateList> {
// use ADMIN_PANEL_BASE_ENDPOINT to construct the endpoint URL
}


export async function getFinalEstimate(estimateId: number): Promise<any> {
  // use ADMIN_PANEL_BASE_ENDPOINT to construct the endpoint URL
}


export async function getProjectAlternateEstimate(estimateId: number): Promise<Estimate> {
  // use ADMIN_PANEL_BASE_ENDPOINT to construct the endpoint URL
}

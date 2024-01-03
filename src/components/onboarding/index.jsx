import {
  // AppBar,
  Box,
  // ButtonBase,
  CircularProgress,
  // InputBase,
  // Stack,
  // Toolbar,
  // Typography,
} from "@mui/material";
import React, { useEffect } from "react";
// import ReactPlayer from "react-player";
// import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
// import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import DoneIcon from "@mui/icons-material/Done";
// import pandoLogo from "../images/pando-logo.svg";
import awsLogo from "../../images/AWSDark.svg";
import alkamaiLogo from "../../images/akamai.svg";
import datadogLogo from "../../images/Datadog.svg";
import githubLogo from "../../images/githubDark.svg";
import kubernetesLogo from "../../images/kubernetesDark.svg";
import oktaLogo from "../../images/oktaDark.svg";
import gcpLogo from "../../images/gcp.svg";
import newrelicLogo from "../../images/newrelic_dark.svg";
// import cloudFormationLogo from "../images/cloudFormation.svg";
// import terraformLogo from "../images/terraform.svg";
// import pandoSmallLogo from "../images/pando-small-logo.svg";
// import spinner from "../images/spinner.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./module.css";
// import {
//   sendAwsOnboarding,
//   checkOnboarding,
//   finishOnboarding,
// } from "../utils/api";
// import MultiStepSidebar from "./MultiStepSidebar";
import Header from "../header";
import Stage1 from "../stage1";
import Stage2 from "../stage2";
import SidebarIntegration from "../sidebarIntegration";
import Stage3 from "../stage3";
import Completed from "../completed";
import Sidebar from "../sidebar";

// const GITHUB_CLIENT_ID = "7fb75e3b108747c19873";
// const GITHUB_REDIRECT_URI = process.env.REACT_APP_FRONTEND_URL + "/github_auth/";

const dataSourcesData = [
  {
    id: "aws",
    name: "AWS",
    logo: awsLogo,
  },
  {
    id: "k8s",
    name: "K8s",
    logo: kubernetesLogo,
  },
  {
    id: "datadog",
    name: "Datadog",
    logo: datadogLogo,
  },
  {
    id: "akamai",
    name: "Akamai",
    logo: alkamaiLogo,
  },
  {
    id: "github",
    name: "GitHub",
    logo: githubLogo,
  },
  {
    id: "okta",
    name: "Okta",
    logo: oktaLogo,
  },
  {
    id: "googlecloud",
    name: "Google Cloud",
    logo: gcpLogo,
  },
  {
    id: "newrelic",
    name: "New Relic",
    logo: newrelicLogo,
  },
];

// const integrationCardWidths = [275, 459, 370, 370, 312, 423, 403, 329];

export default function Onboarding() {
  const [stage, setStage] = React.useState(1);
  const [onboardingStatus, setOnboardingStatus] = React.useState(0);
  const [isBackDisabled, setBackDisabled] = React.useState(false);
  const [sidebarStep, setSidebarStep] = React.useState(1);
  const [account, setAccount] = React.useState("");
  const [isAwsAccountIdEntered, setIsAwsAccountIdEntered] =
    React.useState(false);
  const [role, setRole] = React.useState("");
  const [external_id, setExternal_id] = React.useState("");
  const [awsError, setAwsError] = React.useState("");
  const [isGenerated, setIsGenerated] = React.useState(false); // New state
  const [isLoading, setIsLoading] = React.useState(false);
  const [integrationMethodPickerOpen, setIntegrationMethodPickerOpen] =
    React.useState(false);
  const [integrationOpen, setIntegrationOpen] = React.useState(false);
  const [selectedDataSource, setSelectedDataSource] = React.useState("");
  const [connectedDataSources, setConnectedDataSources] = React.useState([]);
  const [filteredDataSourcesData, setFilteredDataSourcesData] =
    React.useState(dataSourcesData);
  const [connectorSearchText, setConnectorSearchText] = React.useState("");
  // const { getAccessTokenSilently, user } = useAuth0(); // uncomment this line and remove the next one

  const user = { name: "Dahovis954" }; // remove this line
  const sanitizedUserName = DOMPurify.sanitize(user.name);

  // useEffect(() => {
  //   const fetchOnboardingStatus = async () => {
  //     try {
  //       const auth0Token = await getAccessTokenSilently();
  //       const status = await checkOnboarding(auth0Token);
  //       setOnboardingStatus(status);
  //       setIsLoading(false);
  //       if (status === 0 || status === null) {
  //         setStage(1);
  //       } else if (status === 1) {
  //         setStage(4);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching onboarding status: ", error);
  //     }
  //   };

  //   fetchOnboardingStatus();
  // }, []);

  useEffect(() => {
    sidebarStep === 3 &&
      setConnectedDataSources((prevDataSources) => [
        ...prevDataSources,
        selectedDataSource,
      ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarStep]);

  const handleConnectorSearchTextChange = (e) => {
    const searchText = e.target.value;
    setConnectorSearchText(searchText);

    const filtered = dataSourcesData.filter((dataSource) =>
      dataSource.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setFilteredDataSourcesData(filtered);
  };

  const handleAccountChange = (event) => {
    const newValue = event.target.value;
    // This will test if newValue consists only of digits
    if (/^\d*$/.test(newValue)) {
      setAccount(newValue);

      const accountId = newValue.trim(); // remove any whitespace

      // Check if the input is a number and is 12 digits long
      setIsAwsAccountIdEntered(/^[0-9]{12}$/.test(accountId));
    }
  };

  const handleContinue = async () => {
    if (stage === 1) {
      setStage(2);
    } else if (stage === 2) {
      setStage(3);
      setIntegrationOpen(false);
    } else if (stage === 3) {
      try {
        // const auth0Token = await getAccessTokenSilently();
        // await sendAwsOnboarding(
        //   account,
        //   role,
        //   external_id,
        //   self_role,
        //   auth0Token
        // );
        // await finishOnboarding(auth0Token);
        // setBackDisabled(true);
        // const payload = {
        //   channel: "#customer-onboarding",
        //   username: "webhookbot",
        //   text: `User ${sanitizedUserName} has completed onboarding.`,
        //   icon_emoji: ":pando:",
        // };
        // sendSlackNotification(payload)
        //   .then((response) => console.log("Slack message sent successfully"))
        //   .catch((error) =>
        //     console.error("Error sending Slack message: ", error)
        //   );
      } catch (error) {
        if (error.response && error.response.data) {
          const errData =
            typeof error.response.data === "string"
              ? JSON.parse(error.response.data)
              : error.response.data;
          if (errData && errData.detail && Array.isArray(errData.detail)) {
            const errorMessage = errData.detail
              .map((err) => `${err.loc[1]}: ${err.msg}`)
              .join("\n");
            setAwsError(errorMessage);
          } else {
            setAwsError(error.message);
          }
        } else {
          setAwsError(error.message);
        }
        console.error("Error sending AWS details: ", error);
      }
    }
  };

  const handleConnect = (dataSourceId) => {
    if (dataSourceId === "aws") {
      setSelectedDataSource(dataSourceId);
      setIntegrationMethodPickerOpen(true);
    }
    // add more data source connect action here
  };

  const handleIntegrationOpen = () => {
    setIntegrationMethodPickerOpen(false);
    setIntegrationOpen(true);
  };

  const handleLunchStack = async () => {
    setSidebarStep(2);
    setBackDisabled(true);

    try {
      const response = await axios.get("https://api.example.com/data"); // put the real backend url here
      const data = response.data;
      console.log("Data:", data);
      handleContinue();
      setSidebarStep(3);
    } catch (error) {
      console.error("Error:", error);
      setAwsError(JSON.stringify(error));
      setBackDisabled(false);
    }
  };

  const handleDone = () => {
    setStage(2);
    setIntegrationMethodPickerOpen(false);
    setIntegrationOpen(false);
  };

  const handleBack = () => {
    // if (!isBackDisabled) {
    if (stage === 2) {
      if (!integrationMethodPickerOpen && !integrationOpen) {
        setStage(1);
      }
      integrationMethodPickerOpen && setIntegrationMethodPickerOpen(false);
      if (integrationOpen) {
        setIntegrationMethodPickerOpen(true);
        setIntegrationOpen(false);
      }
    } else if (stage === 3) {
      setStage(2);
      setIntegrationOpen(true);
      setSidebarStep(1);
    } else if (stage === 4) {
      setStage(3);
    }
    // }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Header  stage={stage} sanitizedUserName={sanitizedUserName} />

      <Box component="main" className="container">
        {stage === 1 && !integrationMethodPickerOpen && !integrationOpen && (
          <Stage1 
            handleBack={handleBack}
            handleContinue={handleContinue}
            sanitizedUserName={sanitizedUserName} 
            KeyboardBackspaceIcon={KeyboardBackspaceIcon} 
            ArrowRightAltIcon={ArrowRightAltIcon} 
          />
        )}

        {stage === 2 && !integrationMethodPickerOpen && !integrationOpen && (
          <Stage2
            connectorSearchText={connectorSearchText}
            handleConnectorSearchTextChange={handleConnectorSearchTextChange}
            filteredDataSourcesData={filteredDataSourcesData}
            connectedDataSources={connectedDataSources}
            handleConnect={handleConnect}
            handleBack={handleBack}
          />
        )}

        {integrationMethodPickerOpen && (
          <Sidebar
            handleIntegrationOpen={handleIntegrationOpen}
            handleConnect={handleConnect}
            handleBack={handleBack}
          />
        )}

        {integrationOpen && (
          <SidebarIntegration
            sidebarStep={sidebarStep}
            account={account}
            handleAccountChange={handleAccountChange}
            isGenerated={isGenerated}
            awsError={awsError}
            isBackDisabled={isBackDisabled}
            handleBack={handleBack}
            handleLunchStack={handleLunchStack}
          />
        )}

        {onboardingStatus === 0 &&
          (stage === 3 || stage === 4) &&
          !integrationMethodPickerOpen &&
          !integrationOpen && (
            <Stage3 
            sidebarStep={sidebarStep}
            handleBack={handleBack}
            handleContinue={handleContinue}
            handleDone={handleDone}
            isBackDisabled={isBackDisabled}
            />
          )}

        {onboardingStatus === 1 &&
          !integrationMethodPickerOpen &&
          !integrationOpen && (
            <Completed />
          )}
      </Box>
    </Box>
  );
}

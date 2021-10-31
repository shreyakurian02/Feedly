import React, {Component} from "react"

import ErrorBoundaryPage from "./ErrorBoundaryPage";

export class ErrorBoundary extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        hasError : false
      };
    }

  static getDerivedStateFromError(error){
    return {hasError: true};
  }

  componentDidCatch(error,errorInfo){
    console.log(error.errorInfo);
  }

  render(){
    if(this.state.hasError){
      return <ErrorBoundaryPage/>
    }

    return this.props.children;
  }

  }
export default ErrorBoundary;

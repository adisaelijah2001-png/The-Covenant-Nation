import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props){
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error){
    return { error }
  }

  componentDidCatch(){
    // Could send to logging service here
    // console.error('ErrorBoundary caught', error, info)
  }

  render(){
    if(this.state.error){
      return (
        <div style={{padding:'4rem',textAlign:'center'}}>
          <h1 style={{color:'#0B1F3A'}}>An error occurred</h1>
          <p style={{color:'#334155'}}>Something went wrong while rendering the app.</p>
          <pre style={{whiteSpace:'pre-wrap',textAlign:'left',maxWidth:800,margin:'1rem auto',background:'#fff',padding:'1rem',borderRadius:8}}>{String(this.state.error)}</pre>
          <p style={{color:'#6b7280'}}>Check the browser console for more details.</p>
        </div>
      )
    }
    return this.props.children
  }
}

function Spa(){
    
    return (
    
    <HashRouter>
        <UserContext.Provider value={{users: [{name:`austin`, email:`cdbarnhil2@gmail.com`,password:`1234`,balance:1000000}]}}>
        <NavBar/>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/Login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata" component={AllData} />
        </UserContext.Provider>
    </HashRouter>
   
    
    
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById(`root`)
)
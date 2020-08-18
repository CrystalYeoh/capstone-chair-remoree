render() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={()=><Menu dishes ={this.state.dishes} />} />
            </Switch>
            <Footer />
        </div>
    );
}

//exact becasue later for dishdetail, we will be using /menu as well
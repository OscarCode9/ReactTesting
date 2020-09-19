import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'Root'


let wrapped
let initialState 
beforeEach(() => {

    initialState = {
        comments: [ 'Comment 1', 'Comment 2']
    }

    wrapped = mount(
        <Root initialState={ initialState } >
            <CommentList />
        </Root >
    )


})

it('creates one LI per comment', () => {
    console.log(wrapped.find('li').length)
    expect(wrapped.find('li').length).toEqual(2)

})

it('show the text for each comment', ()=> {
    
    console.log(wrapped.render().text())
    
    initialState.comments.forEach(element => {
        expect(wrapped.render().text()).toContain(element)
    });
    


})

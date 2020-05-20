const assert = require('assert');

function go(rover, instructions) {

    return Array.from(instructions).reduce((rover, instruction) => {
        if(instruction == 'R'){
            if(rover.facing == 'N')
                return {...rover, facing: "E"};

            if(rover.facing == 'E')
                return {...rover, facing: 'S'};

            if(rover.facing == 'S')
                return {...rover, facing: 'W'};

            return {...rover, facing: 'N'};
        };

        if(instruction == 'L'){
            if(rover.facing == 'N')
                return {...rover, facing: "W"};

            if(rover.facing == 'W')
                return {...rover, facing: 'S'};

            if(rover.facing == 'S')
                return {...rover, facing: 'E'};

            return {...rover, facing: 'N'};
        }

        if(instruction == 'F'){
            if(rover.facing == 'N')
                return {...rover, position: {...rover.position, y: rover.position.y + 1}};

            if(rover.facing == 'E')
                return {...rover, position: {...rover.position, x: rover.position.x + 1}};

            if(rover.facing == 'S')
                return {...rover, position: {...rover.position, y: rover.position.y - 1}};

            return {rover, position: {...rover.position, x: rover.position.x - 1}};
        };

        if(instruction == 'B'){
            if(rover.facing == 'N')
                return {...rover, position: {...rover.position, y: rover.position.y - 1}};

            if(rover.facing == 'E')
                return {...rover, position: {...rover.position, x: rover.position.x - 1}};

            if(rover.facing == 'S')
                return {...rover, position: {...rover.position, y: rover.position.y + 1}};

            return {rover, position: {...rover.position, x: rover.position.x + 1}};
        }
    }, rover);


}

describe('Mars Rover', () => {
    it('Turns right N to E', () => {
        let rover = {facing: 'N'};
        rover = go(rover, "R");
        assert.equal(rover.facing, 'E');
    });

    it('Turns right E to S', () => {
        let rover = {facing: 'E'};
        rover = go(rover, "R");
        assert.equal(rover.facing, 'S');
    });

    it('Turns right S to W', () => {
        let rover = {facing: 'S'};
        rover = go(rover, "R");
        assert.equal(rover.facing, 'W');
    });

    it('Turns right W to N', () => {
        let rover = {facing: 'W'};
        rover = go(rover, "R");
        assert.equal(rover.facing, 'N');
    });

    it('Turns left N to W', () => {
        let rover = {facing: 'N'};
        rover = go(rover, "L");
        assert.equal(rover.facing, 'W');
    });

    it('Turns left W to S', () => {
        let rover = {facing: 'W'};
        rover = go(rover, "L");
        assert.equal(rover.facing, 'S');
    });

    it('Turns left S to E', () => {
        let rover = {facing: 'S'};
        rover = go(rover, "L");
        assert.equal(rover.facing, 'E');
    });

    it('Turns left E to N', () => {
        let rover = {facing: 'E'};
        rover = go(rover, "L");
        assert.equal(rover.facing, 'N');
    });

    it('Moves forward Y+1 facing N', () => {
        let rover = {facing: 'N', position: {x: 5, y: 5}};
        rover = go(rover, 'F');
        assert.deepEqual(rover.position, {x: 5, y:6});
    });

    it('Moves forward X+1 facing E', () => {
        let rover = {facing: 'E', position: {x: 5, y: 5}};
        rover = go(rover, 'F');
        assert.deepEqual(rover.position, {x: 6, y:5});
    });

    it('Moves forward Y-1 facing S', () => {
        let rover = {facing: 'S', position: {x: 5, y: 5}};
        rover = go(rover, 'F');
        assert.deepEqual(rover.position, {x: 5, y:4});
    });

    it('Moves forward X-1 facing W', () => {
        let rover = {facing: 'W', position: {x: 5, y: 5}};
        rover = go(rover, 'F');
        assert.deepEqual(rover.position, {x: 4, y:5});
    });

    it('Moves back Y-1 facing N', () => {
        let rover = {facing: 'N', position: {x: 5, y: 5}};
        rover = go(rover, 'B');
        assert.deepEqual(rover.position, {x: 5, y:4});
    });

    it('Moves back X-1 facing E', () => {
        let rover = {facing: 'E', position: {x: 5, y: 5}};
        rover = go(rover, 'B');
        assert.deepEqual(rover.position, {x: 4, y:5});
    });

    it('Moves back Y+1 facing S', () => {
        let rover = {facing: 'S', position: {x: 5, y: 5}};
        rover = go(rover, 'B');
        assert.deepEqual(rover.position, {x: 5, y:6});
    });

    it('Moves back X+1 facing W', () => {
        let rover = {facing: 'W', position: {x: 5, y: 5}};
        rover = go(rover, 'B');
        assert.deepEqual(rover.position, {x: 6, y:5});
    });

    it('Executes sequence of instructions', () => {
        let rover = {facing: 'N', position: {x: 5, y: 5}};
        rover = go(rover, 'RFF');
        assert.deepEqual(rover, {facing: 'E', position: {x: 7, y: 5}});
    })
})
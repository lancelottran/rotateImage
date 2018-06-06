char firstNotRepeatingCharacter(char * s) {
    
    int dup[256] = {0};
    int size = strlen(s);
    
    for(int i = 0; i < size; i++){
        dup[s[i]]++;
    }
    
    for(int i = 0; i < size; i++){
        if(dup[s[i]] == 1)
            return s[i];
    }
    
    return '_';
}
